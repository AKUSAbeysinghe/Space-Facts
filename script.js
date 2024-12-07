let currentFactIndex = 0;

const facts = [
    {
        id: 1,
        fact: "One day on Saturn's moon Titan lasts 15.9 Earth days",
        category: "planetary_time"
    },
    // ... previous facts ...
    {
        id: 9,
        fact: "The universe is expanding faster now than it ever has before",
        category: "cosmos"
    },
    {
        id: 10,
        fact: "There are more stars in the universe than grains of sand on all of Earth's beaches",
        category: "cosmos"
    }
];

document.getElementById('total-facts').textContent = facts.length;

function showLoadingSpinner() {
    const spinner = document.getElementById('spinner');
    const factText = document.getElementById('fact-text');
    spinner.style.display = 'block';
    factText.style.opacity = '0.3';
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('spinner');
    const factText = document.getElementById('fact-text');
    spinner.style.display = 'none';
    factText.style.opacity = '1';
}

function updateFact(index) {
    showLoadingSpinner();
    
    setTimeout(() => {
        document.getElementById('fact-text').textContent = facts[index].fact;
        document.getElementById('category').textContent = facts[index].category;
        document.getElementById('fact-number').textContent = facts[index].id;
        hideLoadingSpinner();
    }, 500);
}

function getRandomFact() {
    const newIndex = Math.floor(Math.random() * facts.length);
    currentFactIndex = newIndex;
    updateFact(currentFactIndex);
}

function getNextFact() {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    updateFact(currentFactIndex);
}

function shareOnSocial() {
    if (navigator.share) {
        navigator.share({
            title: 'Amazing Space Fact!',
            text: document.getElementById('fact-text').textContent,
            url: window.location.href,
        }).catch(console.error);
    } else {
        alert('Sharing is not supported on this browser');
    }
}

// Initialize with first fact
updateFact(currentFactIndex);
