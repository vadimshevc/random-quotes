const quotes = [
    {
        quote: 'The only way to do great work is to love what you do',
        author: 'Steve Jobs'
    },
    {
        quote: 'Innovation distinguishes between a leader and a follower',
        author: 'Steve Jobs'
    },
    {
        quote: 'Your time is limited, so don`t waste it living someone else`s life',
        author: 'Steve Jobs'
    },
    {
        quote: 'Stay hungry, stay foolish',
        author: 'Steve Jobs'
    },
    {
        quote: 'If you are working on something that you really care about, you don`t have to be pushed. The vision pulls you',
        author: 'Steve Jobs'
    },
    {
        quote: 'The best way to predict the future is to create it',
        author: 'Peter Drucker'
    },
    {
        quote: 'Whether you think you can or you think you can`t, you`re right',
        author: 'Henry Ford'
    },
    {
        quote: 'People who are crazy enough to think they can change the world, are the ones who do',
        author: 'Rob Siltanen'
    },
    {
        quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
        author: 'Winston Churchill'
    },
    {
        quote: 'Believe you can and you`re halfway there',
        author: 'Theodore Roosevelt'
    },
    {
        quote: 'Strive not to be a success, but rather to be of value',
        author: 'Albert Einstein'
    },
    {
        quote: 'I have not failed. I`ve just found 10,000 ways that won`t work',
        author: 'Thomas A. Edison'
    },
    {
        quote: 'The only limit to our realization of tomorrow will be our doubts of today',
        author: 'Franklin D. Roosevelt'
    },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById("generate-btn")

function generateRandomQuote () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.quote;
    quoteAuthorElement.textContent = randomQuote.author;
}

generateBtn.addEventListener("click", generateRandomQuote);

