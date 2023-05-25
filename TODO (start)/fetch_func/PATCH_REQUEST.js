import { createTodoItem } from "../main.js";

export async function PATCH_REQUEST(id) {
  let todoItem = createTodoItem();
  fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      done: todoItem.item.style.backgroundColor = "green",
    })
  });
}
