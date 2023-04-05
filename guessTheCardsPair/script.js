function userInput() {
    let userInputPairs = prompt("Введите количество пар от 1 до 8")
    if (userInputPairs <= 8 && userInputPairs != 0) {
        return userInputPairs
    } else {
        alert("Что-то пошло не так...")
        userInput()
    }
}

// создание игрового поля
function generateGameField() {
    const gameField = document.createElement("div")
    gameField.classList.add("gameField")

    const pelement = document.createElement("p")
    pelement.textContent = "Время до окончания"
    pelement.classList.add("pelement")

    const timerToEnd = document.createElement("p")
    timerToEnd.classList.add("timerToEnd")
    timerToEnd.textContent = "30"

    const btnStartGame = document.createElement("button")
    btnStartGame.classList.add("btnStartGame")
    btnStartGame.textContent = "Начать игру"

    const btnRestartGame = document.createElement("button")
    btnRestartGame.classList.add("btnRestartGame")
    btnRestartGame.textContent = "Перезапустить таймер"

    const containerForGame = document.querySelector(".containerForGame")
    containerForGame.append(pelement, timerToEnd, btnStartGame, btnRestartGame, gameField)
    addCardsToGameField(getCards(userInput()), gameField)

    btnStartGame.addEventListener("click", () => {
        startTimer(timerToEnd, btnStartGame)
        guessPairs()
    });

    btnRestartGame.addEventListener("click", () => {
        location.reload()
            // btnStartGame.removeAttribute('disabled', true)
            // timerToEnd.textContent = "2";
            // gameField.style.pointerEvents = "none";
    });
}

function startTimer(timerToEnd, btnStartGame) {
    let count = timerToEnd.textContent
    timer = setInterval(() => {
        count--
        timerToEnd.textContent = count
        if (count === 0) {
            clearInterval(timer)
            timerToEnd.textContent = "Time is up!"
        }
    }, 1000)
    btnStartGame.setAttribute("disabled", true)
}
// получить массив пар карт
function getCards(textFromUserInput) {
    const pairsCard = []
    for (let i = 1; i <= textFromUserInput; i++) {
        pairsCard.push(i)
        pairsCard.push(i)
    }
    shufflePairs(pairsCard)
    return pairsCard
}

// Перемешать массив
function shufflePairs(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// добавление карт на поле
function addCardsToGameField(pairsCard, gameField) {
    for (let i = 0; i < pairsCard.length; i++) {
        let cardItem = document.createElement("div")
        cardItem.classList.add("cardItem")
        let cardText = document.createElement("p")
        cardText.classList.add("cardText")
        cardText.textContent = pairsCard[i]
        cardItem.append(cardText)
        gameField.append(cardItem)
    }
}

function guessPairs() {

    let firstGuess
    let secondGuess
    let firstGuessBlock
    let secondGuessBlock
    let gameFields = document.querySelector(".gameField")
    gameFields.style.pointerEvents = "auto"
    const leftSeconds = document.querySelector(".timerToEnd")
    const cardTexts = document.querySelectorAll(".cardText")
    const cardItems = document.querySelectorAll(".cardItem")
    let count = 0
    for (let i = 0; i < cardTexts.length; i++) {
        cardTexts[i].addEventListener("click", () => {
            if (leftSeconds.textContent != "Time is up!") {
                console.log(leftSeconds.textContent);
                if (count < 1) {
                    count++
                    firstGuess = cardTexts[i]
                    firstGuessBlock = cardItems[i]
                    cardItems[i].style.backgroundColor = "white"
                } else if (count < 2) {
                    count++;
                    secondGuess = cardTexts[i]
                    secondGuessBlock = cardItems[i]
                    cardItems[i].style.backgroundColor = "white"
                }
                if (count == 2) {
                    if (firstGuess.textContent == secondGuess.textContent) {
                        firstGuess.setAttribute("disabled", true)
                        secondGuess.setAttribute("disabled", true)
                        count = 0
                        firstGuess, secondGuess = null
                    } else {
                        setTimeout(() => {
                            firstGuessBlock.style.backgroundColor = "black"
                            secondGuessBlock.style.backgroundColor = "black"
                        }, 200)
                        count = 0
                        firstGuess, secondGuess = null
                    }
                }
            } else {
                gameFields.style.pointerEvents = "none"
            }
        });
    }
}