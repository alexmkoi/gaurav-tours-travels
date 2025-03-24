const toggle = document.querySelector(".theme-toggle i");
const body = document.body;
const typingText = document.querySelector(".typing-text span");

const words = [
    "Explore Breathtaking Destinations",
    "Unforgettable Travel Experiences",
    "Adventure Awaits You",
    "Luxury & Budget Trips",
    "Discover the World with Us"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
    applySystemTheme();
});

function applySystemTheme() {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        body.classList.add("light-mode");
        toggle.classList.replace("fa-moon", "fa-sun");
    }
}

toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    toggle.classList.toggle("fa-sun");
    toggle.classList.toggle("fa-moon");
});
