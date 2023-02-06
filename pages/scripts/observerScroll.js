import { getLocalStorage, getNewsLlStorage } from "./localStorage.js";
import { createPost } from "./render.js";
import { getPostNews } from "./requests.js";

let pages = 1

const renderNewPost = async () => {
    const date = await getPostNews(pages)

    if (date.nextPage <= 3) {
        date.news.forEach(element => {
            createPost(element)
        });

        const ul = document.querySelector('.list-posts-news')
        const divObserver = document.createElement("div")
        divObserver.classList.add("divObserver")
        ul.appendChild(divObserver)
        observer.observe(divObserver)
        pages++
    }
}

function armazetaTudo() {
    let arr = getLocalStorage().news
    let newArr = getNewsLlStorage()

    arr.forEach(element => {
        // let filter = newArr.includes(element)
        // console.log(filter)

        if (newArr.length < 18) {
            newArr = [...newArr, element]
            localStorage.setItem('newsLStorage', JSON.stringify(newArr))
        }
    })
}

const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
        renderNewPost()
        armazetaTudo()
    }
})


export { observer }