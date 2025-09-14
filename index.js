document.addEventListener('DOMContentLoaded', function() {
// Typing animation
const typingTextElement = document.getElementById('typingText');
const roles = ['Fullstack Developer', 'Software Developer', 'Web Designer/Developer','Tech Innovator', 'Change Maker'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
function typeText() {
const currentRole = roles[roleIndex];
if (isDeleting) {
typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
charIndex--;
typingSpeed = 50;
} else {
typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
charIndex++;
typingSpeed = 100;
}
if (!isDeleting && charIndex === currentRole.length) {
isDeleting = true;
typingSpeed = 1500; // Pause at the end
} else if (isDeleting && charIndex === 0) {
isDeleting = false;
roleIndex = (roleIndex + 1) % roles.length;
typingSpeed = 500; // Pause before typing next role
}
setTimeout(typeText, typingSpeed);
}
typeText();
// Particle animation
function createParticles() {
const particlesContainer = document.getElementById('particles');
const particleCount = 20;
for (let i = 0; i < particleCount; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');
const size = Math.random() * 10 + 5;
const posX = Math.random() * 100;
const posY = Math.random() * 100;
const duration = Math.random() * 20 + 10;
const delay = Math.random() * 5;
particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
particle.style.left = `${posX}%`;
particle.style.top = `${posY}%`;
particle.style.opacity = Math.random() * 0.5 + 0.1;
particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
particlesContainer.appendChild(particle);
}
}
createParticles();
// Copy functionality
function setupCopyButton(buttonId, text, successMessage = 'Copied!') {
const button = document.getElementById(buttonId);
if (button) {
button.addEventListener('click', function() {
navigator.clipboard.writeText(text).then(function() {
const originalHTML = button.innerHTML;
button.innerHTML = `<i class="ri-check-line"></i>`;
setTimeout(function() {
button.innerHTML = originalHTML;
}, 2000);
});
});
}
}
setupCopyButton('copyEmail', 'chanmiabek22@gmail.com');
setupCopyButton('copyPhone', '+254 738 447 384');
setupCopyButton('copyEmailAlt', 'chanmiabek22@gmail.com');
setupCopyButton('copyPhoneAlt', '+254 738 447 384');
});