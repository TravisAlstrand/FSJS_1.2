// QUOTES ARRAY
const quotes = [
  {
    quote: "Hold on to your butts!",
    source: "Ray Arnold",
    citation: "Jurassic Park",
    year: "1993",
    actor: "Samuel L. Jackson"
  },
  {
    quote: "Well, I could be wrong, but I believe, uh, diversity is an old, old wooden ship that was used during the Civil War era.",
    source: "Ron Burgundy",
    citation: "Anchorman: The Legend of Ron Burgundy",
    year: "2004",
    actor: "Will Ferrell"
  },
  {
    quote: "The ability to speak does not make you intelligent.",
    source: "Qui-Gon Jinn",
    citation: "Star Wars Ep. 1: The Phantom Menace",
    year: "1999",
    actor: "Liam Neeson"
  },
  {
    quote: "Guy came in here looking for you. Real Grim Reaper-type. I don't know, might further the plot.",
    source: "Weasel",
    citation: "Deadpool",
    year: "2016",
    actor: "T.J. Miller"
  },
  {
    quote: "According to the map, we've only gone 4 inches.",
    source: "Harry Dunne",
    citation: "Dumb and Dumber",
    year: "1994",
    actor: "Jeff Daniels"
  }
];

// COLORS ARRAY
const colors = [
  'rgb(49, 192, 190)',
  'rgb(88, 107, 215)',
  'rgb(200, 88, 215)',
  'rgb(215, 88, 88)',
  'rgb(215, 179, 88)'
];

let unusedQuotes = [...quotes];
let unusedColors = [...colors];

let timer;

// GET RANDOM QUOTE / COLOR
const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * unusedQuotes.length);
  return unusedQuotes[randomNumber];
};

const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * unusedColors.length);
  return unusedColors[randomNumber];
}

// PRINT QUOTE & CHANGE COLOR
const body = document.querySelector('body');
const quoteBox = document.querySelector('#quote-box');

const printQuote = () => {

  // CHANGE AUTOMATICALLY
  clearInterval(timer)
  timer = setInterval(printQuote, 6000);

  // IF EMPTY, REFILL DUPLICATE ARRAYS
  if (unusedQuotes.length <= 0) {
    unusedQuotes = [...quotes];
  };
  if (unusedColors.length <= 0) {
    unusedColors = [...colors];
  };

  const quote = getRandomQuote();
  const color = getRandomColor();

  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  html += `</p>`;
  if (quote.actor) {
    html += `<p class="actor">Actor: ${quote.actor}</p>`;
  }
  quoteBox.innerHTML = html;
  body.style.backgroundColor = color;

  // UPDATE DUPLICATE ARRAYS
  const index1 = unusedQuotes.indexOf(quote);
  unusedQuotes.splice(index1, 1);
  const index2 = unusedColors.indexOf(color);
  unusedColors.splice(index2, 1);
  
};

// INITIALIZE ON PAGE LOAD
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);