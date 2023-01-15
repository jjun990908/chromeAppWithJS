const quotes = [
    {
        quotes : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney",
    },
    {
        quotes : "Life is what happens when you're busy making other plans",
        author : "John Lennon",
    },
    {
        quotes : "The world is a book and those who do not travel read only one page.",
        author : "Saint Augustine",
    },
    {
        quotes : "Life is either a daring adventure or nothing at all.",
        author : "Helen Keller",
    },
    {
        quotes : "To travel is to Live",
        author : "Hans Cristian Adnersen",
    },
    {
        quote : "Travel expands the mind and fills the gap.",
        author : "Sheda Savage",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todatsQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todatsQuote.quote;
author.innerText = todatsQuote.author;