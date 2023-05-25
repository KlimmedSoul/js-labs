export async function POST_REQUEST(name) {
    let response = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },

        body: JSON.stringify({
            name: name,
            owner: "user",
        }),
    })
    let data = await response.json();
    console.log(data);
} 