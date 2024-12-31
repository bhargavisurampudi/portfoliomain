// Add any interactive JavaScript functionality here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded successfully!");
});

// Mobile menu toggle functionality
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden'); // Hide menu after clicking
    }
}
