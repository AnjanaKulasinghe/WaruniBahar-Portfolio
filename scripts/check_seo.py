#!/usr/bin/env python3
"""Lightweight, dependency-free SEO checks for this static portfolio."""

from __future__ import annotations

import json
import re
import sys
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
CANONICAL = "https://genibahar.com/"
SITE_ORIGIN = "https://genibahar.com"


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.metas: dict[tuple[str, str], list[str]] = defaultdict(list)
        self.links: list[dict[str, str]] = []
        self.anchors: list[dict[str, str]] = []
        self.images: list[dict[str, str]] = []
        self.ids: list[str] = []
        self.headings: Counter[str] = Counter()
        self.json_ld: list[str] = []
        self._in_json_ld = False
        self._json_ld_buffer: list[str] = []
        self.title_parts: list[str] = []
        self._in_title = False
        self.html_lang = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_map = {key: value or "" for key, value in attrs}
        if tag == "html":
            self.html_lang = attrs_map.get("lang", "")
        if attrs_map.get("id"):
            self.ids.append(attrs_map["id"])
        if tag == "meta":
            for key in ("name", "property"):
                if attrs_map.get(key):
                    self.metas[(key, attrs_map[key].lower())].append(attrs_map.get("content", ""))
        if tag == "link" and attrs_map.get("rel", "").lower() == "canonical":
            self.links.append({"kind": "canonical", "href": attrs_map.get("href", "")})
        if tag in {"a", "link", "script", "img", "source"}:
            for key in ("href", "src", "srcset"):
                if attrs_map.get(key):
                    self.links.append({"kind": tag, "href": attrs_map[key]})
        if tag == "a":
            self.anchors.append(attrs_map)
        if tag == "img":
            self.images.append(attrs_map)
        if re.fullmatch(r"h[1-6]", tag):
            self.headings[tag] += 1
        if tag == "title":
            self._in_title = True
        if tag == "script" and attrs_map.get("type") == "application/ld+json":
            self._in_json_ld = True
            self._json_ld_buffer = []

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self._in_title = False
        if tag == "script" and self._in_json_ld:
            self.json_ld.append("".join(self._json_ld_buffer))
            self._in_json_ld = False

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self.title_parts.append(data)
        if self._in_json_ld:
            self._json_ld_buffer.append(data)


def main() -> int:
    errors: list[str] = []
    page_paths = [ROOT / "index.html", *sorted((ROOT / "projects").glob("*.html"))]
    parsed_pages: dict[Path, PageParser] = {}
    canonical_urls: list[str] = []
    page_titles: list[str] = []
    page_descriptions: list[str] = []

    def require(condition: bool, message: str) -> None:
        if not condition:
            errors.append(message)

    for page_path in page_paths:
        require(page_path.exists(), f"Missing public HTML page: {page_path.relative_to(ROOT)}")
        parser = PageParser()
        parser.feed(page_path.read_text(encoding="utf-8"))
        parsed_pages[page_path] = parser
        relative_path = page_path.relative_to(ROOT).as_posix()
        expected_url = CANONICAL if relative_path == "index.html" else f"{SITE_ORIGIN}/{relative_path}"
        title = " ".join("".join(parser.title_parts).split())
        descriptions = parser.metas[("name", "description")]
        canonicals = [entry["href"] for entry in parser.links if entry["kind"] == "canonical"]
        canonical_urls.extend(canonicals)
        page_titles.append(title)
        page_descriptions.extend(descriptions)

        require(bool(title), f"{relative_path}: missing page title")
        require(len(title) <= 80, f"{relative_path}: title is unusually long ({len(title)} characters)")
        require(parser.html_lang == "en-NZ", f"{relative_path}: expected en-NZ document language")
        require(len(descriptions) == 1 and bool(descriptions[0].strip()), f"{relative_path}: expected one non-empty meta description")
        require(canonicals == [expected_url], f"{relative_path}: expected one canonical URL {expected_url}")
        require(parser.metas[("name", "robots")] == ["index, follow, max-image-preview:large"], f"{relative_path}: unexpected robots meta directive")
        require(parser.headings["h1"] == 1, f"{relative_path}: expected one h1, found {parser.headings['h1']}")
        require("main-content" in parser.ids, f"{relative_path}: missing main content landmark target")
        require(any(anchor.get("href") == "#main-content" for anchor in parser.anchors), f"{relative_path}: missing keyboard skip link")
        require(len(parser.ids) == len(set(parser.ids)), f"{relative_path}: duplicate HTML id attributes")
        require(all(image.get("alt", "").strip() for image in parser.images), f"{relative_path}: an image is missing meaningful alt text")
        require(
            all("noopener" in anchor.get("rel", "").lower().split() for anchor in parser.anchors if anchor.get("target") == "_blank"),
            f"{relative_path}: links opening new tabs must use rel=noopener",
        )
        require(parser.metas[("property", "og:url")] == [expected_url], f"{relative_path}: Open Graph URL must match canonical")
        require(bool(parser.metas[("property", "og:title")]), f"{relative_path}: missing Open Graph title")
        require(bool(parser.metas[("property", "og:description")]), f"{relative_path}: missing Open Graph description")
        require(bool(parser.metas[("property", "og:image")]), f"{relative_path}: missing Open Graph image")
        require(bool(parser.metas[("name", "twitter:card")]), f"{relative_path}: missing Twitter card type")

        for key in (("property", "og:image"), ("name", "twitter:image")):
            for value in parser.metas[key]:
                image_url = urlsplit(value)
                if image_url.netloc == "genibahar.com":
                    image_path = (ROOT / unquote(image_url.path).lstrip("/")).resolve()
                    require(image_path.is_relative_to(ROOT.resolve()) and image_path.exists(), f"{relative_path}: missing social image {value}")

        for index, raw in enumerate(parser.json_ld, start=1):
            try:
                json.loads(raw)
            except json.JSONDecodeError as exc:
                errors.append(f"{relative_path}: JSON-LD block {index} is invalid: {exc}")
        require(bool(parser.json_ld), f"{relative_path}: missing JSON-LD structured data")

        for link in parser.links:
            href = link["href"].strip()
            if href.startswith(("mailto:", "tel:", "javascript:", "data:")):
                continue
            parts = urlsplit(href)
            if parts.scheme or parts.netloc:
                continue
            if link["kind"] == "source" and "," in href:
                href = href.split(",", 1)[0].strip().split()[0]
                parts = urlsplit(href)
            local_path = unquote(parts.path)
            target = (ROOT / local_path.lstrip("/")) if local_path.startswith("/") else (page_path.parent / local_path)
            target = target.resolve() if local_path else page_path
            require(target.is_relative_to(ROOT.resolve()) and target.exists(), f"{relative_path}: missing local target {href}")
            if parts.fragment and target.suffix == ".html" and target.exists():
                target_parser = parsed_pages.get(target)
                if target_parser is None:
                    target_parser = PageParser()
                    target_parser.feed(target.read_text(encoding="utf-8"))
                require(unquote(parts.fragment) in set(target_parser.ids), f"{relative_path}: missing target fragment {href}")

    require(len(page_titles) == len(set(page_titles)), "Public HTML pages must have unique titles")
    require(len(page_descriptions) == len(set(page_descriptions)), "Public HTML pages must have unique meta descriptions")

    sitemap_path = ROOT / "sitemap.xml"
    try:
        sitemap = ET.parse(sitemap_path).getroot()
        locs = [element.text or "" for element in sitemap.iter() if element.tag.endswith("}loc") or element.tag == "loc"]
        lastmods = [element.text or "" for element in sitemap.iter() if element.tag.endswith("}lastmod") or element.tag == "lastmod"]
        expected_urls = set(canonical_urls)
        require(len(locs) == len(expected_urls) and set(locs) == expected_urls, "Sitemap URLs must exactly match every public page canonical")
        require(bool(lastmods) and all(date.fromisoformat(value) for value in lastmods), "Sitemap lastmod values must be valid ISO dates")
    except (ET.ParseError, ValueError) as exc:
        errors.append(f"Invalid sitemap XML or date: {exc}")

    robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
    require("User-agent: *" in robots and "Allow: /" in robots, "robots.txt must allow public site crawling")
    require("Sitemap: https://genibahar.com/sitemap.xml" in robots, "robots.txt must declare the production sitemap")
    require(re.search(r"(?mi)^User-agent:\s*OAI-SearchBot\s*$[\s\S]*?^Allow:\s*/\s*$", robots) is not None, "OAI-SearchBot must be explicitly allowed")
    require(not re.search(r"(?mi)^\s*Disallow:\s*/\s*$", robots), "robots.txt must not block the entire production site")

    if errors:
        print("SEO checks failed:")
        for error in errors:
            print(f"- {error}")
        return 1
    print(
        "SEO checks passed: title, description, canonical, indexability, structured data, "
        f"{len(page_paths)} public pages, canonical metadata, JSON-LD, image alt text, internal links, local targets, robots.txt, and sitemap."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
