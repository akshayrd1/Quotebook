let allQuotes = [];
let remainingQuotes = [];

const quoteDiv = document.getElementById('quote');
const nextBtn = document.getElementById('nextBtn');

// Load quotes from Quotebook.txt
fetch('Quotebook.txt')
  .then(response => response.text())
  .then(data => {
    allQuotes = data.split('\n').filter(q => q.trim() !== ''); // Remove empty lines
    remainingQuotes = [...allQuotes];
    quoteDiv.textContent = getNextQuote();
  })
  .catch(err => {
    quoteDiv.textContent = "Failed to load quotes.";
    console.error(err);
  });

function getNextQuote() {
  if (remainingQuotes.length === 0) {
    remainingQuotes = [...allQuotes]; // Reset after all quotes shown
  }
  const index = Math.floor(Math.random() * remainingQuotes.length);
  const quote = remainingQuotes.splice(index, 1)[0];
  return quote;
}

// Button click handler
nextBtn.addEventListener('click', () => {
  quoteDiv.textContent = getNextQuote();
});
