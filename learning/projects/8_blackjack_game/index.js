// jack, queen, and king are all worth 10
// ace can be worth 11 or 1 and we get to choose as a player
// in this code, the ace is set to 11

let player = {
    name: `Denis`,
    chips: 100
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ``
let messageEl = document.getElementById(`message-el`)
let sumEl = document.getElementById(`sum-el`)
let cardsEl = document.getElementById(`cards-el`)
let playerEl = document.getElementById(`player-el`)

playerEl.textContent = `${player.name}: $${player.chips}`

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        if (i === (cards.length - 1)) {
            cardsEl.textContent += `${cards[i]}`
        } else {
            cardsEl.textContent += `${cards[i]} - `
        }
    }
    sumEl.textContent = `Sum: ${sum}`
    if (sum < 21) {
        message = `Do you want to draw a new card?`   
    } else if (sum === 21) {
        message = `You have got Blackjack!`
        hasBlackjack = true   
    } else {
        message = `You are out of the game!`
        isAlive = false   
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}