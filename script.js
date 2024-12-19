//Fun fact generator , about space
const facts = [
    {
        id: 1,
        fact: "One day on Saturn's moon Titan lasts 15.9 Earth days",
        category: "planetary_time"
    },
    {
        id: 2,
        fact: "A year on Mercury is just 88 Earth days long, but a single day on Mercury takes 176 Earth days",
        category: "planetary_time"
    },
    {
        id: 3,
        fact: "Neutron stars are so dense that a teaspoon of their material would weigh about 4 billion tons",
        category: "stellar_objects"
    },
    {
        id: 4,
        fact: "The largest known asteroid is Ceres, which is about 940 kilometers (584 miles) in diameter",
        category: "asteroids"
    },
    {
        id: 5,
        fact: "The footprints left by Apollo astronauts on the Moon will likely last for at least 100 million years",
        category: "moon"
    },
    {
        id: 6,
        fact: "The Sun loses about 4 million tons of mass every second due to fusion reactions",
        category: "sun"
    },
    {
        id: 7,
        fact: "Saturn's rings are mostly made up of water ice and are only about 10 meters thick on average",
        category: "planets"
    },
    {
        id: 8,
        fact: "If you could fly a plane to Pluto, it would take about 800 years at typical commercial aircraft speeds",
        category: "space_travel"
    }
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-text').textContent = facts[randomIndex].fact;
    document.getElementById('category').textContent = facts[randomIndex].category;
}

function shareOnSocial() {
    if (navigator.share) {
        navigator.share({
            title: 'Amazing Space Fact!',
            text: document.getElementById('fact-text').textContent,
            url: window.location.href,
        });
    }
}

// Load initial fact when page loads
window.onload = getRandomFact;
