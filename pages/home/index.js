import { dataCategory } from "../scripts/dataCategory.js"
import {getNewsLlStorage } from "../scripts/localStorage.js"
import { observer } from "../scripts/observerScroll.js"
import { createPost, render } from "../scripts/render.js"
import {getPostNews } from "../scripts/requests.js"

function renderFilters(list) {
    let ulFilter = document.querySelector('.list-filters')

    ulFilter.innerHTML = ''

    list.forEach(element => {

        let btnFilter = document.createElement('button')
        btnFilter.classList = ('btn-default font4')

        btnFilter.innerText = element

        btnFilter.id = element.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()

        btnFilter.addEventListener('click', async () => {
            localStorage.setItem('filterButton', JSON.stringify(btnFilter.id))
            btnFilter.classList.toggle('btn-selected')
            filterOn()
        })

        ulFilter.appendChild(btnFilter)
    })
}

renderFilters(dataCategory)

async function renderAllPosts() {
    const newsTest = await getPostNews()
    let data = newsTest.news

    data.forEach(element => {
        createPost(element)
    })

    const ul = document.querySelector('.list-posts-news')
    const divObserver = document.createElement("div")
    divObserver.classList.add("divObserver")
    ul.appendChild(divObserver)
    observer.observe(divObserver)
    
}

function filterOn() {
    let filter = JSON.parse(localStorage.getItem('filterButton'))
    let allnews = getNewsLlStorage()

    allnews.forEach(element =>{
        element.category = element.category.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
    })

    if (filter == 'todos') {
        let ulPosts = document.querySelector('.list-posts-news')
        ulPosts.innerHTML = ''
        renderAllPosts()
    } else {
      let filterOneCategory = allnews.filter(el => el.category == filter)
      render(filterOneCategory)
    }
}

filterOn()

export { renderAllPosts }