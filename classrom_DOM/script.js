// Задание №1

// let btn = document.querySelector('.btn')

// function HelloWorld() {
//     alert("Привет, мир!")
// }

// let btn = document.querySelector('.btn')
// btn.addEventListener("click", HelloWorld)

//---------------------------------------------------------------

// Задание №2

//let TextInput = document.querySelector(".input");
//let btn = document.querySelector('.btn')

// function addTextInput() {
//     TextInput.value = "test@mail.ru"
// }


// btn.addEventListener("click", addTextInput)

//---------------------------------------------------------------

// Задание №3

//let TextInput = document.querySelector(".input");
//let btn = document.querySelector('.btn')

// function getFullOrEmptyInput() {
//     TextInput.value ? alert("Вы ввели что-то в импут") : alert("Вы ничего не ввели")
// }

// let btn = document.querySelector('.btn')
// btn.addEventListener("click", getFullOrEmptyInput)

//---------------------------------------------------------------

// Задание №4

//let TextInput = document.querySelector(".input");
//let secondTextInput = document.querySelector(".secondInput");
//let btn = document.querySelector('.btn')


// function swapInputs() {
//     let helpString = "";
//     helpString = TextInput.value;
//     TextInput.value = secondTextInput.value
//     secondTextInput.value = helpString;
// }

// btn.addEventListener("click", swapInputs)

//---------------------------------------------------------------

// Задание №5

// let firstBtn = document.querySelector(".BanBtn");
// let secondBtn = document.querySelector(".UnbanBtn");
//let TextInput = document.querySelector(".input");

// function getBlockedInput() {
//     TextInput.setAttribute('disabled', 'disabled')
// }

// function getUnblockedInput() {
//     TextInput.removeAttribute('disabled')
// }

// firstBtn.addEventListener("click", getBlockedInput)
// secondBtn.addEventListener("click", getUnblockedInput)

//--------------------------------------------------------------------

// Задание №6

// let square = document.querySelector(".square")
//let btn = document.querySelector('.btn')

// function squareHideOrShow() {
//     if (btn.textContent == "Скрыть квадрат") {
//         // square.style.backgroundColor = 'white';
//         square.style.display = 'none';
//         btn.textContent = "Показать квадрат"
//     }
//     else {
//         // square.style.backgroundColor = 'red';
//         square.style.display = 'block';
//         btn.textContent = "Скрыть квадрат"
//     }
// }

// btn.addEventListener("click", squareHideOrShow)

//--------------------------------------------------------------------

// Задание №7

// let square = document.querySelector(".square")

// function swapHoverSquareColorGreen() {
//     square.style.backgroundColor = 'green';
// }

// function swapHoverSquareColorRed() {
//     square.style.backgroundColor = 'red';
// }

// square.addEventListener("mouseover", swapHoverSquareColorGreen)
// square.addEventListener("mouseout", swapHoverSquareColorRed)

//--------------------------------------------------------------------

// Задание №8

// let square = document.querySelectorAll(".square")

// function swapColorsSquares() {
//     for (let i = 0; i < square.length; i++) {
//         square[i].style.backgroundColor = "red"
//     }
//     for (let i = 0; i < square.length; i++) {
//         square[i].addEventListener("click", () => {
//             square[i].style.backgroundColor = "green"
//         })

//     }
// }

// for (let i = 0; i < square.length; i++) {
//     square[i].addEventListener("click", swapColorsSquares)
// }

//--------------------------------------------------------------------

// Задание №10

let btnNumbers = document.querySelectorAll(".btnNumber")
let btnOperations = document.querySelectorAll(".btnOperation")
let btnEqual = document.querySelector(".btnEquals")


for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", () => {
        TextInput.value += btnNumbers[i].innerHTML;
    })
}

for (let i = 0; i < btnOperations.length; i++) {
    btnOperations[i].addEventListener("click", () => {
        TextInput.value += btnOperations[i].innerHTML;
    })
}

btnEqual.addEventListener("click", () => {
    let equal = eval(TextInput.value);
    TextInput.value = equal
})