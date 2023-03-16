// //Задание 1
// // Напишите код, выполнив задание из каждого пункта отдельной строкой:

// // Создайте пустой объект user.
// // Добавьте свойство name со значением John.
// // Добавьте свойство surname со значением Smith.
// // Измените значение свойства name на Pete.
// // Удалите свойство name из объекта.

let user = {
  name: "John",
  surname: "Smith",
};

user.surname = "Smith";
delete user.name;

console.log(user.name);

//-----------------------------------------------------------------------------------------------------------------------

// Задание 2
// Вывести зарплату Коли
let obj = { Коля: "1000", Вася: "500", Петя: "200" };

console.log(obj["Коля"]);

//-------------------------------------------------------------------------------------------------------------------------

// Задание 2.1
// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и
// возраст и возвращает массив, где каждый элемент представляет из себя строку "Иван 23 года".

let workersList = [
  { age: 23, name: "Иван " },
  { age: 34, name: "Коля " },
  { age: 26, name: "Петр " },
];

let newWorkersList = [];

function getWorkers(workersList) {
  for (let i = 0; i < workersList.length; i++) {
    workersList[i].age <= 23
      ? newWorkersList.push(
          workersList[i].name + workersList[i].age + " " + "года"
        )
      : newWorkersList.push(
          workersList[i].name + workersList[i].age + " " + "лет"
        );
  }
  console.log(newWorkersList);
}

getWorkers(workersList);

//---------------------------------------------------------------------------------------------------------------------------------------------

// //Задание 3
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
// Удалите из массива объектов, задание 3, объект с name == "Anna".
let user = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "Anna",
    age: 19,
  },
];

let userBob = " ";
for (let i = 0; i < user.length; i++) {
  if (user[i]["name"] == "Bob") {
    userBob = user[i];
  }

  if (user[i]["name"] == "Anna") {
    user.splice(i, 1);
  }
}
console.log(userBob);
console.log(user);

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// Задача 4
// Создать объект, свойствами которого будут 2 переменные и функция, которая выводит в консоль имя и фамилию из переменных
// Добавить свойство, значением которого будет функция, которая выводит сообщение в консоль 'My name ... '
// удалить первую функцию

let surnameUser = "Шуклин";
let nameUser = "Сергей";

function getNameSurname(name, surname) {
  console.log(name, surname);
}

let user = {
  surnameUser,
  nameUser,
  getNameSurname,

  getUserName(nameUser) {
    console.log("My name " + nameUser);
  },
};

user.getNameSurname(user.nameUser, user.surnameUser);
user.getUserName(user.nameUser);

delete user.getNameSurname;

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Задача 5
//Создать функцию, входными параметрами которой будут 2 числа.
// Создайте объект calculator (калькулятор) с двумя свойствами, значениями которых будут входные параметры функции и с двумя методами:
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let result = 0;

function calc(firstNumber, secondNumber, operation) {
  let calculator = {
    firstNumber,
    secondNumber,

    sum() {
      let result = this.firstNumber + this.secondNumber;
      return result;
    },

    mul() {
      let result = this.firstNumber * this.secondNumber;
      return result;
    },
  };
  // return {"Сумма ": calculator.sum(), "Произведение ": calculator.mul()}
  return calculator[operation]();
}

console.log(calc(1, 2, "mul"));

// ---------------------------------------------------------------------------------------------------------------------------------------

//Задание 6
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries() {
  let sum = 0;
  for (key in salaries) {
    sum = sum + salaries[key];
  }
  return sum;
}

console.log(sumSalaries());

// ---------------------------------------------------------------------------------------------------------------------------------------

//Задание 7
// У нас есть следующий объект:
// let user = {
//     name: "John",
//     age: 30
// };
// Проверьте программно, что этот объект не пустой и что в нем есть ключ age.

// typeof и система типов

let user = {
  name: "John",
  age: 30,
};

Object.keys(user).length == 0
  ? console.log("Объект пуст")
  : console.log("Объект не пустой");

"age" in user
  ? console.log("age существует")
  : console.log("age не существует");

// ---------------------------------------------------------------------------------------------------------------------------------------

// Задание 9
// Создайте функцию multiplyNumberic(obj), которая умножает все числовые свойста объекта obj на 2.
// Обратите внимание, что multiplyNumberic не нужно возвращать ничего. Следует напрямую изменять объект.
let menu = {
  with: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumberic(obj) {
  for (let elem in obj) {
    if (typeof obj[elem] == "number") {
      obj[elem] = obj[elem] * 2;
    }
  }
}
multiplyNumberic(menu);
console.log(menu);
