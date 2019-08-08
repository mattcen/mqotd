function showQuote() {

  var quotes = [
    {
      'text': 'What is this?',
      'author': 'Mattcen'
    }];

  var random_quote = quotes[Math.floor(Math.random() * quotes.length)];
  var quote_div = document.querySelector('div#content > blockquote');
  quote_text = random_quote['text'];
  quote_author = random_quote['author'];
  cite = document.createElement('cite');
  cite.appendChild(document.createTextNode(quote_author));
  quote_div.appendChild(document.createTextNode(quote_text));
  quote_div.appendChild(cite);
}
showQuote();
