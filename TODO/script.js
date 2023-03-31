let userInput = document.querySelector(".userInput")
let btnInput = document.querySelector(".btnInput")
let todoList = document.querySelector(".todoList")
let btnDeleteAll = document.querySelector(".deleteAll")

function newDeal() {
    // создание элементов
    let containerDeal = document.createElement("div")
    let dealText = document.createElement("p")
    let btnReady = document.createElement("button")
    let btnDelete = document.createElement("button")

    // проверка на нулевой ввод
    if (userInput.value.length == 0) {
        alert("Вы ничего не ввели.")
        return
    }

    // добавление дела
    dealText.innerHTML = userInput.value
    userInput.value = ""
    todoList.append(containerDeal)
    containerDeal.append(dealText)
    containerDeal.append(btnReady)
    containerDeal.append(btnDelete)
    containerDeal.classList.add("containerDeal")

    // 1 блок дела
    containerDeal.style.display = 'flex'
    containerDeal.style.width = '100%'
    containerDeal.style.height = "5.5vh"
    containerDeal.style.justifyContent = "right"

    // текст    
    dealText.style.marginTop = "0.5vh"
    dealText.style.fontSize = "40px"


    // кнопка "Готово"/"Не готово"
    btnReady.textContent = "Готово"
    btnReady.style.backgroundColor = "#40bb27"
    btnReady.style.color = "white"
    btnReady.style.width = "10vh"
    btnReady.style.height = "5vh"
    btnReady.style.fontSize = "16px"
    btnReady.style.marginLeft = "20vh"

    // кнопка "Удалить"
    btnDelete.textContent = "Удалить"
    btnDelete.style.backgroundColor = "red"
    btnDelete.style.color = "white"
    btnDelete.style.width = "10vh"
    btnDelete.style.height = "5vh"
    btnDelete.style.fontSize = "16px"
    btnDelete.style.marginLeft = "50px"
    btnDelete.style.justifyContent = "right"




    // наведение на кнопку "Удалить"
    btnDelete.addEventListener("mouseover", () => {
        btnDelete.style.backgroundColor = "#cc0000"
    })

    btnDelete.addEventListener("mouseout", () => {
        btnDelete.style.backgroundColor = "red"
    })

    // наведение на кнопку "Готово"
    btnReady.addEventListener("mouseover", () => {
        btnReady.textContent == "Готово" ? btnReady.style.backgroundColor = "#328f1f" : null
        btnReady.textContent == "Не готово" ? btnReady.style.backgroundColor = "#5c5c5c" : null
    })

    btnReady.addEventListener("mouseout", () => {
        btnReady.textContent == "Готово" ? btnReady.style.backgroundColor = "#40bb27" : null
        btnReady.textContent == "Не готово" ? btnReady.style.backgroundColor = "grey" : null
    })


    // подтверждение удаления
    btnDelete.addEventListener("click", () => {
        let question = "Вы действительно хотите удалить это дело?"
        let result = confirm(question)
        result ? containerDeal.remove() : null
    })

    // функционал готово/не готово
    btnReady.addEventListener("click", () => {
        if (btnReady.textContent == "Готово") {
            containerDeal.style.backgroundColor = "#6cf351"
            btnReady.textContent = "Не готово"
            btnReady.style.backgroundColor = "gray"
        } else {
            containerDeal.style.backgroundColor = "#BA55D3"
            btnReady.textContent = "Готово"
            btnReady.style.backgroundColor = "#40bb27"
        }
    })
}

// запуск функции по нажатию Enter
userInput.addEventListener("keyup", (event) => {
    event.keyCode === 13 ? btnInput.click() : null
})

// запуск функции по нажатию кнопки
btnInput.addEventListener("click", newDeal)


// очистка листа
btnDeleteAll.addEventListener("click", () => {
    let allContainerDeals = document.querySelectorAll(".containerDeal")
    let result = confirm("Вы действительно хотите очистить лист?")
    if (allContainerDeals.length > 0) {
        for (let i = 0; i < allContainerDeals.length; i++) {
            result ? allContainerDeals[i].remove() : null
        }
    } else {
        alert("Лист уже пустой")
    }
})
