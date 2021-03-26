/******************************************
[*] Treehouse FSJS Techdegree:
[*] Project 1
[*] A Random Quote Generator
[*] by Diego Alvarez. @doc on slack.
[*] March 2021.
******************************************/
/**
* This random quote generator app will display random quotes
* previosuly fetch from an array of objects, by using two functions:
* - getRandomQuote() = generate and return the random quote object.
* - printQuote() = get the data from the object returned and
* insert it to the HTML.
*
* Built-ins used: Math.floor, Math.random.
**/

// ----------------------------------------------------------------------------

/**
* quotes [array], with an object for each quote.
* Object properties : quote, source, citation, year, tags.
* Not every object has all properties.!
**/

const quotes = [
  {
    quote: `Never go to a doctor whose office plants have died.`,
    source: "humorist, Erma Bombeck",
    citation: "The Democrat and Chornicle´s Newspaper column",
    year: "1975"
  },
  {
    quote: `A good physician treats the disease, the great physician treats
            the patient who has the disease.`,
    source: "UNKNOWN",
    citation: "...maybe derived from Moses Maimonides (Rambam)",
    year: "",
    tags: "Medical quotes"
  },
  {
    quote: `[The] physician, who, having just forbidden his cardiac patient
            indulgence in tobacco, alcohol and amorous intimacies, was asked by
            the victim, 'Tell me, doctor, if I give these things up, will I live
            longer?' to which his physician replied with charm and candor,
            "No, but it'll seem longer."`,
    source: "Dr. Bernard, Meyer",
    citation: "in his Book, 'What patient?, What Truth?'",
    year: "1955",
    tags: "Medical quotes"
  },
  {
    quote: `I'm going to make him an offer he can't refuse.`,
    source: "Marlon Brando",
    citation: "The Godfather Movie",
    year: ""
  },
  {
    quote: `There's no place like home.`,
    source: "Harold Arlen",
    citation: "",
    year: "1939"
  },
  {
    quote: `Carpe diem. Seize the day, boys. Make your lives extraordinary.`,
    source: "John Keating (Robin Williams)",
    citation: "in the movie, Dead Poets Society",
    year: ""
  },
  {
    quote: `Life is pain and the enjoyment of love is an anesthetic.`,
    source: "Cesare Paverse",
    citation: "in his book ´This Business of living´, p74",
    year: "1961",
    tags: "Medical quotes"
  },
  {
    quote: `To be in love is merely to be in a state of perceptual anesthesia
            to mistake an ordinary young woman for a goddess.`,
    source: "H.L Mencken",
    citation: "",
    year: "2012",
    tags: "Medical quotes"
  },
];

// ----------------------------------------------------------------------------

/**
* Function: getRandomQuote()
* Arrow function with no parameters, generates a random number
* between 0 and the length of the array, so if we want later to add
* more quotes, the app will still randomize all indexes.
*
* @return {object} - the random object from the array.
**/

const getRandomQuote = () => {
  let random_index = Math.floor( Math.random() * (quotes.length) );
  return quotes[random_index];
}

// ----------------------------------------------------------------------------

/**
* Function: printQuote()
* Arrow function with no parameters, that calls the getRandomQuote()
* function, then generates and return the HTML template string with the data
* fetch from the object, and inserted in the "quote-box" element.
* HTML tags used: <p> and <span>.
*
* We checked if the quote object has certain properties before using them.
**/

const printQuote = () => {
  const random_quote = getRandomQuote();
  let html = `
             <p class ="quote">${random_quote.quote}</p>
             <p class ="source">${random_quote.source}`;

  if ( random_quote.citation ) {
    html += `<span class="citation">${random_quote.citation}.</span> `;
  }
  if ( random_quote.year ) {
    html += `<span class="year">${random_quote.year}.</span> `;
  }
  if ( random_quote.tags ) {
    html += `<span class="tags">${random_quote.tags}</span>`;
  }

  html += `</p>`;

/**
* Function: rand_rgb()
* Takes no parameters, and
* @return {array} - Array of 3 RGB random colors.
* This colors are passed to the background style of body tag, so
* we get a random background with each quote.
**/

  const rand_rgb = () => {
    let rgb_arr = [];
    for (let i = 0; i < 3; i++) {
      rgb_arr.push(Math.floor(Math.random() * 256));
    }
    return rgb_arr;
  }

  document.querySelector("body").style.backgroundColor = `rgb(${rand_rgb()})`;
  document.getElementById('quote-box').innerHTML = html;
}

/**
* setting the setInterval() global method to dislplay a random quote,
* every 10 seconds.
**/

setInterval(printQuote, 10000);


/**
 * click event listener for the print quote button
**/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Have a nice day, Enjoy!!
