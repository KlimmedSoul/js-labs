export function getBtns(arr) {
    let divForBtns = document.querySelector(".all_btns")
    let cnt = 1
    for (let i = 0; i < arr.length; i++) {
        if (i % 5 == 0) {
            let btnForPagination = document.createElement("button")
            btnForPagination.classList.add("btn_for_pag")
            btnForPagination.textContent = cnt
            divForBtns.append(btnForPagination)
            cnt++
        }
    }
}