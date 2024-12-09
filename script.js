// script.js
const facts = [
    // ... existing facts array ...
];

let currentFactIndex = 0;

function getRandomFact() {
    const previousIndex = currentFactIndex;
    do {
        currentFactIndex = Math.floor(Math.random() * facts.length);
    } while (currentFactIndex === previousIndex && facts.length > 1);
    
    updateUI();
    animateFactTransition();
}

function updateUI() {
    const factText = document.getElementById('fact-text');
    const category = document.getElementById('category');
    const factNumber = document.getElementById('fact-number');
    
    factText.textContent = facts[currentFactIndex].fact;
    category.textContent = facts[currentFactIndex].category.replace('_', ' ');
    factNumber.textContent = currentFactIndex + 1;
}

function animateFactTransition() {
    const factContainer = document.querySelector('.fact-container');
    factContainer.style.opacity = '0';
    setTimeout(() => {
        factContainer.style.opacity = '1';
    }, 200);
}

function shareOnSocial() {
    if (navigator.share) {
        navigator.share({
            title: '🚀 Amazing Space Fact!',
            text: facts[currentFactIndex].fact,
            url: window.location.href,
        }).catch(console.error);
    } else {
        alert('Copy this fact: ' + facts[currentFactIndex].fact);
    }
}

// Initialize first fact
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});
