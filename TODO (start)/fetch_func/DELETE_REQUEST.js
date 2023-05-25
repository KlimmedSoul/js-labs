import { GET_REQUEST } from "./GET_REQUEST.js";

export async function DELETE_REQUEST(id) {
    let getRequest = await GET_REQUEST();

    for(let i = 0; i < getRequest.length; i++){ 
        fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json"
        }})
    }
}