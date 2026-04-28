// Cyber-themed Particle System for Background Animation
console.log('🔐 Cyber particle system loading...');

const canvas = document.getElementById('particle-canvas');
if (!canvas) {
    console.error('❌ Canvas element not found!');
} else {
    console.log('✅ Canvas element found');
}

const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const particleCount = 80;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
        
        // Cyber color palette - green, purple, magenta
        const colors = [
            `rgba(0, 255, 65, ${this.opacity})`,      // Cyber green
            `rgba(168, 85, 247, ${this.opacity})`,    // Cyber purple
            `rgba(192, 38, 211, ${this.opacity})`     // Cyber magenta
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Initialize particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animation loop
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Connect nearby particles with lines
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                const opacity = 0.2 * (1 - distance / 150);
                ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animateParticles);
}

// Matrix Rain Effect
function createMatrixRain() {
    const matrixContainer = document.getElementById('matrixRain');
    if (!matrixContainer) return;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.left = `${i * 20}px`;
        drop.style.top = `${Math.random() * -100}%`;
        drop.style.fontSize = '14px';
        drop.style.color = '#00ff41';
        drop.style.opacity = Math.random() * 0.5 + 0.1;
        drop.style.fontFamily = 'monospace';
        drop.style.animation = `matrixFall ${Math.random() * 10 + 10}s linear infinite`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        drop.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
        matrixContainer.appendChild(drop);
    }
}

// Start animations
console.log(`✨ Starting cyber particle animation with ${particleCount} particles`);
animateParticles();
createMatrixRain();

// Add CSS for matrix fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes matrixFall {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
