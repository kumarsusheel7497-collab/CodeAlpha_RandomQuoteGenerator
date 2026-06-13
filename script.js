const quotes = [
{
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
author: "Winston Churchill"
},
{
quote: "The future depends on what you do today.",
author: "Mahatma Gandhi"
},
{
quote: "Dream big and dare to fail.",
author: "Norman Vaughan"
},
{
quote: "Believe you can and you're halfway there.",
author: "Theodore Roosevelt"
},
{
quote: "Do something today that your future self will thank you for.",
author: "Sean Patrick Flanery"
}
];

function newQuote() {
const random = Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerText =
quotes[random].quote;

document.getElementById("author").innerText =
"- " + quotes[random].author;
}

newQuote();
