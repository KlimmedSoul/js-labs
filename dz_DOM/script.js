let programmingLenguages = [{
        value: "C++",
        label: "C++"
    },
    {
        value: "Python",
        label: "Python"
    },
    {
        value: "C#",
        label: "C#"
    },
    {
        value: "Java",
        label: "Java"
    }
]

let randomArray = ["значение 1", 1, 4, "привет"]




//                               ЗАДАНИЕ №1
//Напишите функцию, создающую выпадающий список на веб-странице (HTML select)
//из массива объектов со значениями. Массив должен содержать объекты со свойствами:
//• value — значение для атрибута value тэга option
//• label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
//Вторым аргументом функция должна принимать выбранное значение (value
//выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент
//массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.

function createDropDownList(arr, selectedValue = 0) {

    let select = document.createElement("select")

    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i]
        let label, value = null

        if (typeof elem != "object") {
            label = elem
            value = elem
        } else {
            label = elem["label"]
            value = elem["value"]
        }

        let option = document.createElement("option")
        option.setAttribute("value", value)
        select.append(option)

        option.textContent = label
        elem == arr[0] ? option.setAttribute("value", selectedValue) : null

        option.value === selectedValue ? option.setAttribute('selected', true) : null
    }

    return select
}


document.body.append(createDropDownList(randomArray, "C#"))



//                               ЗАДАНИЕ №2
// Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания
// выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:
// Массив примитивных значений типа string или number. В таком случае value и label будут равны. Например: [1, 2, "три", "четыре", ...]
// Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться из ключа (value) и
// значения (label) каждого свойства переданного объекта. Например: {valuel: 'Значение 1', value2: 'Значение 2', ...}
