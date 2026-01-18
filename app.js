fetch('./Quotebook.txt')
  .then(response => {
    if (!response.ok) throw new Error('HTTP error');
    return response.text();
  })
  .then(text => {
    const quotes = text
      .split(/\n\s*\n/)
      .map(q => q.trim())
      .filter(Boolean);

    if (quotes.length === 0) {
      throw new Error('No quotes found');
    }

    let index = Math.floor(Math.random() * quotes.length);
    const quoteEl = document.getElementById('quote');

    function showQuote() {
      quoteEl.textContent = quotes[index];
    }

    function nextQuote() {
      index = (index + 1) % quotes.length;
      showQuote();
    }

    // Show immediately on load / refresh
    showQuote();

    // Auto-change every 15 minutes (900,000 ms)
    setInterval(nextQuote, 900000);
  })
  .catch(err => {
    document.getElementById('quote').textContent =
      'Error loading quote';
    console.error(err);
  });
