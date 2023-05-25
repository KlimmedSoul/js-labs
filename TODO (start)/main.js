import { POST_REQUEST } from "./fetch_func/POST_REQUEST.js";
import { GET_REQUEST } from "./fetch_func/GET_REQUEST.js";
import { DELETE_REQUEST } from "./fetch_func/DELETE_REQUEST.js";
import { PATCH_REQUEST } from "./fetch_func/PATCH_REQUEST.js";
// создаем и возвращаем заголовок приложения
function createAppTitle(title) {
  let appTitle = document.createElement("h2");
  appTitle.innerHTML = title;
  return appTitle;
}
//создаем и возвращаем форму для создания дела
function createTodoItemForm() {
  let form = document.createElement("form");
  let input = document.createElement("input");
  let buttonWrapper = document.createElement("div");
  let button = document.createElement("button");

  form.classList.add("input-group", "mb-3");
  input.classList.add("form-control");
  input.placeholder = "Введите новое дело";
  buttonWrapper.classList.add("input-group-append");
  button.classList.add("btn-primary");
  button.textContent = "Добавить дело";

  buttonWrapper.append(button);
  form.append(input);
  form.append(buttonWrapper);

  //Как это выглядит в HTML

  // <form class = "input-group', 'mb-3">
  //     <input class = "form-control" placeholder = "Введите новое дело">
  //         <div class="input-group-append">
  //             <button class="btn', 'btn-primary"> Добавить дело </button>
  //         </div>
  // </form>

  return {
    form,
    input,
    button,
  };
}
//создаем и возвращаем список элементов
function createTodoList() {
  let list = document.createElement("ul");
  list.classList.add("list-group");
  return list;
}
// создаём и возвращаем элемент для списка дел
export function createTodoItem(name) {
  let item = document.createElement("li");
  //кнопки перемещаем в элемент, который красиво покажет их в одной группе
  let buttonGroup = document.createElement("div");
  let doneButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  //устанавливаем стили для элемента списка, а также для размещения кнопок
  //в его правой части с помощью flex
  item.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  item.textContent = name;

  buttonGroup.classList.add("btn-group", "btn-group-sm");
  doneButton.classList.add("btn", "btn-success");
  doneButton.textContent = "Готово";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.textContent = "Удалить";

  //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
  buttonGroup.append(doneButton);
  buttonGroup.append(deleteButton);
  item.append(buttonGroup);

  //приложению нужен доступ к самому элементу и кнопкам,
  // чтобы обрабатывать события нажатия
  return {
    item,
    doneButton,
    deleteButton,
  };
}

document.addEventListener("DOMContentLoaded", async function () {
  let container = document.getElementById("todo-app");
  let todoAppTitle = createAppTitle("Список дел");
  let todoItemForm = createTodoItemForm();
  let todoList = createTodoList();

  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  //браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
  todoItemForm.form.addEventListener("submit", function (e) {
    //эта строчка необходима, чтобы предотвратить стандартное действие браузера
    //в этом случае мы не хотим, чтобы страница перезагружалась при отправке формы
    e.preventDefault();

    //игнорируем создание элемента, если пользователь ничего не ввёл в поле
    if (!todoItemForm.input.value) {
      return;
    }

    // //создаём и добавляем в список новое дело из поля для ввода
    // todoList.append(createTodoItem(todoItemForm.input.value).item);

    let todoItem = createTodoItem(todoItemForm.input.value);

    POST_REQUEST(todoItemForm.input.value);

    //создаём и добавляем в список новое дело с название из поля для ввода
    todoList.append(todoItem.item);

    //обнуляем значение в поле, чтобы не пришлось стирать его вручную
    todoItemForm.input.value = "";
  });

  let getRequest = await GET_REQUEST();

  for (let i = 0; i < getRequest.length; i++) {
    let todoItem = createTodoItem();
    todoItem.item.textContent = getRequest[i].name;
    todoItem.item.setAttribute("id", `${getRequest[i].id}`);
    todoItem.item.append(todoItem.doneButton);
    todoItem.item.append(todoItem.deleteButton);
    todoList.append(todoItem.item);

    
    todoItem.doneButton.addEventListener("click", () => {
      getRequest[i].done = true;
      todoItem.item.style.backgroundColor = "green";
      PATCH_REQUEST(getRequest[i].id);
    });

    if(getRequest[i].done == true) {
      todoItem.item.style.backgroundColor = "green"
    }
    
    todoItem.deleteButton.addEventListener("click", () => {
      if (confirm("Вы уверены?")) {
        DELETE_REQUEST(getRequest[i].id);
      }
    });
  }
});
