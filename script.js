const quoteText = document.querySelector('.quote')
const authorName = document.querySelector('.author .name')
const quoteBtn = document.querySelector('button')
const soundBtn = document.querySelector('.speech')
const copyBtn = document.querySelector('.copy')
const twitterBtn = document.querySelector('.twitter')

function randomQuote() {
    quoteBtn.classList.add('loading')
    quoteBtn.innerText = "Loading Quote..."
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content
        authorName.innerText = result.author
        quoteBtn.innerText = 'New Quote'
        quoteBtn.classList.remove('loading')
    })
}

soundBtn.addEventListener('click', () => {
    //the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utterance) // speak method of speechSynthesis speaks the utternance
})

copyBtn.addEventListener('click', () => {
    // copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank")
})



quoteBtn.addEventListener('click', randomQuote)