export async function GET_REQUEST() {
    let response = await fetch("https://gorest.co.in/public/v2/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let elem = await response.json();
    return elem
}