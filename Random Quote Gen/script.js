const quotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Mark" },
    { text: "If you ignore the butterflies, you will get a better life.", author: "Gowtham"},
    { text: "Ignore negativity", author: "Vijay"},
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");


    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex].text;
        authorElement.textContent = "- " + quotes[randomIndex].author;

    
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 400);


    const colors = [
        "#ff9966, #ff5e62",
        "#36d1dc, #5b86e5",
        "#00b09b, #96c93d",
        "#f7971e, #ffd200",
        "#8e2de2, #4a00e0",
        "#ff6a00, #ee0979"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, ${randomColor})`;
}
