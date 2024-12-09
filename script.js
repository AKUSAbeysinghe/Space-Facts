// script.js
let likeCount = 0;

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factText = document.getElementById('fact-text');
    const category = document.getElementById('category');
    
    // Remove and re-add fade-in class for animation
    factText.classList.remove('fade-in');
    void factText.offsetWidth; // Trigger reflow
    factText.classList.add('fade-in');
    
    factText.textContent = facts[randomIndex].fact;
    category.textContent = facts[randomIndex].category;
    
    // Add appropriate emoji based on category
    const categoryEmoji = getCategoryEmoji(facts[randomIndex].category);
    document.querySelector('.category-icon').textContent = categoryEmoji;
}

function getCategoryEmoji(category) {
    const emojiMap = {
        'planetary_time': '⏰',
        'stellar_objects': '⭐',
        'asteroids': '☄️',
        'moon': '🌙',
        'sun': '☀️',
        'planets': '🪐',
        'space_travel': '🚀'
    };
    return emojiMap[category] || '🌟';
}

function likeFact() {
    likeCount++;
    document.getElementById('likes').textContent = likeCount;
    
    // Add heart animation
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.style.position = 'absolute';
    heart.style.animation = 'flyHeart 1s ease-out';
    document.querySelector('.like-counter').appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
}

function shareOnSocial() {
    const fact = document.getElementById('fact-text').textContent;
    
    if (navigator.share) {
        navigator.share({
            title: '🌟 Amazing Space Fact!',
            textSpaceFacts`,
            url: window.location.href,
        }).catch(console.error);
    } else {
        // Fallback copy to clipboard
        navigator.clipboard.writeText(fact)
            .then(() => alert('Fact copied to clipboard!'))
            .catch(console.error);
    }
}

// Initialize with random fact on load
document.addEventListener('DOMContentLoaded', getRandomFact);
