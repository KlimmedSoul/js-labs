// Задание №1

// const users = [{ name: "Александр", login: "123", password: "123" },
//                { name: "Виталий", login: "bcvsdg", password: "f2hge2" },
//                 { name: "Денис", login: "mmmbfk", password: "gdf3cxd" }
// ]

// let userInputLogin = prompt("Введите логин")
// let userInputPassword = prompt("Введите пароль")
// let cnt = 0
// for (let i = 0; i < users.length; i++) {
//     if (userInputLogin == users[i].login && userInputPassword == users[i].password) {
//         alert("Здраствуйте, "+ users[i].name)
//         cnt += 1
//     }
// }

// if (cnt < 1) {
//     alert("Ошибка авторизации...")
// }

//-------------------------------------------------------------------------------------------------

// Задание №2
alert("Я игровой бот. Я загадал число, а вы угадайте его! Это число находится между 0 и 10")
let userGuess = Number(prompt("Угадывайте!"))
let rndNumber = Math.round(Math.random()*10)

// while (cnt !== 4) {
//     if (isNaN(userGuess)) {
//         alert("Вы ввели не число !")
//     } else if (userGuess < rndNumber) {
//         alert("Больше!")
//     } else if (userGuess > rndNumber) {
//         alert("Меньше!")
//     } else if (userGuess === rndNumber) {
//         alert("Поздравляю, вы угадали!")
//     }
// }

for (let i = userGuess; userGuess != rndNumber; i = i) {
    if (!parseInt(userGuess)) {
        alert("Вы ввели не число !")
 
    } else if (userGuess < rndNumber) {
        alert("Больше!")
        
    } else if (userGuess > rndNumber) {
        alert("Меньше!")
        
    } else if (userGuess === rndNumber) {
        alert("Поздравляю, вы угадали!")
        
    }
}

function GameGuess(rndNumber, userGuess) {

}