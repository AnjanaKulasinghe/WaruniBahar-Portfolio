// Main JavaScript for Portfolio Interactivity
console.log('🚀 Portfolio initialization started...');

// ===== NAVIGATION =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuBackdrop = document.getElementById('menuBackdrop');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
if (hamburger && navLinks && menuBackdrop) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBackdrop.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when backdrop is clicked
    menuBackdrop.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBackdrop.classList.remove('active');
        document.body.classList.remove('menu-open');
    });

    // Close menu when a link is clicked
    const allNavLinks = navLinks.querySelectorAll('a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBackdrop.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.1)';
    }

    // Hide navbar on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== TYPING EFFECT =====
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect when page loads
    setTimeout(typeWriter, 500);
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll(`
    .about-text-section,
    .skill-category,
    .cert-card,
    .timeline-item,
    .project-card,
    .contact-info,
    .contact-cta
`);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.style.color = '#00ff41';
        } else if (navLink) {
            navLink.style.color = '';
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== CURSOR TRAIL EFFECT (Desktop only) =====
if (window.innerWidth > 768) {
    const cursorDot = document.createElement('div');
    cursorDot.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: #00ff41;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-shadow: 0 0 10px #00ff41;
    `;
    document.body.appendChild(cursorDot);

    const cursorRing = document.createElement('div');
    cursorRing.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border: 2px solid rgba(0, 255, 65, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease, width 0.2s ease, height 0.2s ease;
    `;
    document.body.appendChild(cursorRing);

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorRing.style.opacity = '0';
    });

    // Animate cursor with smooth follow
    function animateCursor() {
        // Dot follows closely
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        // Ring follows with delay
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = (ringX - 15) + 'px';
        cursorRing.style.top = (ringY - 15) + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Expand ring on clickable elements
    const clickableElements = document.querySelectorAll('a, button, .skill-card, .project-card, .cert-card');
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.style.width = '50px';
            cursorRing.style.height = '50px';
            cursorRing.style.left = (ringX - 25) + 'px';
            cursorRing.style.top = (ringY - 25) + 'px';
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.style.width = '30px';
            cursorRing.style.height = '30px';
            cursorRing.style.left = (ringX - 15) + 'px';
            cursorRing.style.top = (ringY - 15) + 'px';
        });
    });
}

// ===== CONSOLE ART =====
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ██     ██  █████  ██████  ██    ██ ███    ██ ██           ║
║   ██     ██ ██   ██ ██   ██ ██    ██ ████   ██ ██           ║
║   ██  █  ██ ███████ ██████  ██    ██ ██ ██  ██ ██           ║
║   ██ ███ ██ ██   ██ ██   ██ ██    ██ ██  ██ ██ ██           ║
║    ███ ███  ██   ██ ██   ██  ██████  ██   ████ ██           ║
║                                                              ║
║              BAHAR - CYBERSECURITY & CLOUD                   ║
║                                                              ║
║   Portfolio v1.0                                             ║
║   © 2026 All Rights Reserved                                 ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

🔐 Cybersecurity Portfolio Loaded Successfully
🌐 Cloud Computing Specialist
✅ QA Engineering Expert

> Ready to secure the digital future...
`);

console.log('✅ Portfolio initialization complete!');

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
});
