let cards = [] // array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

class Player {
    name
    chips

    constructor(name, chips) {
        this.name = name
        this.chips = chips
    }
}
// player = new Player("Per", 145)
// let player = {
//     name: "Per",
//     chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

document.getElementById("start-button").addEventListener("click", startGame)
let newCardButton = document.getElementById("newCard-button")
newCardButton.addEventListener("click", newCard)

function getRandomCard()
{
    randomNum = Math.floor(Math.random() * 13) + 1 // 0.0000 - 12.9999

    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }

}
function startGame()
{
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame()
{
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += " " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message


    if (isAlive)
    {
        newCardButton.style.display = !hasBlackJack ? "inline-block" : "none" ;
    }
    else
    {
        newCardButton.style.display = "none"
    }
}

function newCard() {
    if (isAlive && !hasBlackJack)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
