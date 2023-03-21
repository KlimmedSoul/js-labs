// Задание №1
// let btnTimer = document.querySelector(".btn")
// let inputTime = document.querySelector(".input")
// let remainingTime = document.querySelector(".divElem")
// let fullTime = 0;

// function startTimer() {
//     remainingTime.textContent -= 1
//     remainingTime.textContent <= 0 ? fullTime = clearInterval(fullTime) : null
// }

// function pressedBtn() {
//     fullTime = clearInterval(fullTime)
//     if (inputTime.value > 0) {
//         remainingTime.textContent = inputTime.value
//         fullTime = setInterval(startTimer, 1000)
//     } else {
//         fullTime = clearInterval(fullTime)
//     }
// }

// btnTimer.addEventListener('click', pressedBtn)

//--------------------------------------------------------------------------------------------------------------


// Задание №2

// let textInput = document.querySelector(".input")
// let titleText = document.querySelector(".title")
// let remainingTime = 0;

// function changeTitleText() {
//     titleText.textContent = textInput.value
// }

// function ouputChangedText() {
//     setTimeout(changeTitleText, 300)
// }

// textInput.addEventListener("keyup", ouputChangedText)