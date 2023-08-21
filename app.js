// Get quotes from API
const authorName = document.getElementById('authorName');
const quoteText = document.getElementById('quoteText');
const animeName = document.getElementById('animeName');
const quoteContainer = document.getElementById('quote-container');
const newQuoteBtn = document.getElementById('nextBtn');
const twitterBtn = document.getElementById('twitterBtn');
const loaderScreen = document.getElementById('loader');
const copyBtn = document.getElementById('copy');
const speakBtn = document.getElementById('speak')

let currentQuote = {};

//loader visible
function loading() {
    quoteContainer.hidden = true;
    loaderScreen.hidden = false
}

function Complete() {
    quoteContainer.hidden = false;
    loaderScreen.hidden = true;
}

function useQuote() {
    loading();
    //check quote length for styling.
    if (currentQuote.quote.length > 100) {
        // console.log("too long")
        quoteText.classList.add('text-2xl');
        quoteText.classList.remove('text-4xl');
       // getQuotes();

    }
    else if (currentQuote.quote.length > 400) {

        getQuotes();

    } else {
        quoteText.classList.add('text-4xl');
        quoteText.classList.remove('text-2xl')
    }

    //show  anime name, quote and author name.
    authorName.innerHTML = currentQuote.character;
    quoteText.innerHTML = currentQuote.quote;
    animeName.innerHTML = currentQuote.anime;
    Complete();

}

async function getQuotes() {
    loading();
    const apiUrl = "https://animechan.xyz/api/random";
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            return alert('Sorry for the trouble, Please try again later.');
        }
        currentQuote = await response.json();
       // console.log(currentQuote)
        useQuote();
    }

    catch (error) {
        console.log(error)
    }
}

//tweet function
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorName.textContent}`;
    window.open(twitterUrl, '_blank');


}

//Event Listener
newQuoteBtn.addEventListener('click', getQuotes);

twitterBtn.addEventListener('click', tweetQuote);

copyBtn.addEventListener('click', () => {

    navigator.clipboard.writeText(quoteText.innerHTML);
    alert('Copied Quote')
})

speakBtn.addEventListener('click', () => {
    const speech = new SpeechSynthesisUtterance(quoteText.innerHTML);

    speech.voice = speechSynthesis.getVoices()[1]; // Choose a specific voice
    speech.pitch = 1.2; // Range from 0 to 2
    speech.rate = 0.7; // Range from 0.1 to 10
    speech.volume = 0.5; // Range from 0 to 1

    speechSynthesis.speak(speech)
})


//on Load
getQuotes();


// Anime
// character
// quote