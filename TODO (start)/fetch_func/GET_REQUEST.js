export async function GET_REQUEST() {
  let response = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let elem = await response.json();
  return elem
}
