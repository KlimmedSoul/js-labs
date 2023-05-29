import { GET_REQUEST } from "./GET_REQUEST.js"
import { getBtns } from "./getBtns.js"
import { getArticles } from "./getArticles.js"

let getRequest = await GET_REQUEST()

getBtns(getRequest)

let btns = document.querySelectorAll(".btn_for_pag")
    // на каждую кнопку
btns.forEach(element => {
    element.addEventListener("click", (e) => {
        getArticles(getRequest, e)
    })
});