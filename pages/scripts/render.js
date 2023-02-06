import { getPostID } from "./requests.js";

function render(list){
    let ulPosts = document.querySelector('.list-posts-news')
    ulPosts.innerHTML = ''

    list.forEach(element => {
        createPost(element)
    });
}

function renderOnlyNews({ title, description, content, image }) {

    const mainContent = document.querySelector('.content-main-post')

    mainContent.insertAdjacentHTML('afterbegin', `
        <header class="header-post">
            <div class='container box-title'>
            <h2 class='font1'>${title}</h2>
            <p class='font4'>${description}</p>
            </div>
        </header>

        <article class="post-main-content container">
            <div class='img-post'alt="Image post"></div>
            <div class="box-description">
                <p class='font4'>${content}</p>
            </div>
        </article>
    `)
    let img = document.querySelector('.img-post')
    img.style.backgroundImage = `url(${image})`
}


function createPost(post) {

    let ulPosts = document.querySelector('.list-posts-news')

    let liNews = document.createElement('li')
    liNews.id = post.id

    const divObserver = document.createElement("div")
    divObserver.classList.add("observer")

    let boxImg = document.createElement('div')
    boxImg.classList.add('box-img')
    boxImg.style.backgroundImage = `url(${post.image})`

    let divTitle = document.createElement('div')
    divTitle.classList.add('box-title-post')

    let title = document.createElement('h2')
    title.innerText = post.title
    title.classList = ('font3 font3-bold')

    let description = document.createElement('p')
    description.innerText = post.description
    description.classList.add('font4')

    let ref = document.createElement('a')
    ref.innerText = 'Acessar conteúdo'
    ref.classList = ('font4 font4-green')

    ref.addEventListener('click', async () => {
        let newsArr = await getPostID(post.id)
        window.location.replace('../post/index.html')
        renderOnlyNews(newsArr)
    })

    divTitle.appendChild(title)
    liNews.append(boxImg, divTitle, description, ref)
    ulPosts.appendChild(liNews)
}

export {render, createPost, renderOnlyNews}