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
let randomArray = [1, 2, "три", "четыре"]


//                               ЗАДАНИЕ №1
//Напишите функцию, создающую выпадающий список на веб-странице (HTML select)
//из массива объектов со значениями. Массив должен содержать объекты со свойствами:
//• value — значение для атрибута value тэга option
//• label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
//Вторым аргументом функция должна принимать выбранное значение (value
//выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент
//массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.

function getDropDownList(programmingLenguages, selectedValue = programmingLenguages[0].value) {

    let select = document.createElement("select");
    document.body.append(select);

    for (let i = 0; i < programmingLenguages.length; i++) {

        let option = document.createElement("option");
        select.append(option);
        option.textContent = programmingLenguages[i].value;

        if (option.value === selectedValue) {
            option.setAttribute('selected', true);
        }


    }
}


//                               ЗАДАНИЕ №2
//Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания
//выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:
//• Массив примитивных значений типа string или number. В таком случае value и label будут равны. Например: [1, 2, "три", "четыре", ...]
//• Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться из ключа (value) и
//значения (label) каждого свойства переданного объекта. Например: {valuel: 'Значение 1', value2: 'Значение 2', ...}


// В процессе