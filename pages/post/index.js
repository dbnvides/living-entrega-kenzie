import { dataCategory } from "../scripts/dataCategory.js";
import { getNewsLocalStorage } from "../scripts/localStorage.js";
import { renderOnlyNews } from "../scripts/render.js";

let local = getNewsLocalStorage()
renderOnlyNews(local)

function renderFiltersButton(list) {
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
        })

        ulFilter.appendChild(btnFilter)
    })
}

renderFiltersButton(dataCategory)