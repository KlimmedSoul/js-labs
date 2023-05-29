export function getArticles(arr, e) {
    let allArticles = document.querySelectorAll(".div_for_article")
    allArticles.forEach((e) => {
        e.remove()
    })
    let main = document.querySelector(".all_articles")
    for (let i = e.target.textContent * 5 - 5; i < e.target.textContent * 5; i++) {
        try {
            let div_for_article = document.createElement("div")
            div_for_article.classList.add("div_for_article")
            let label = document.createElement('h1')
            label.classList.add("article_label")
            label.textContent = arr[i].title
            let text = document.createElement("p")
            text.classList.add("article_text")
            text.textContent = arr[i].body
            div_for_article.append(label, text)
            main.append(div_for_article)
        } catch (err) {}
    }
}