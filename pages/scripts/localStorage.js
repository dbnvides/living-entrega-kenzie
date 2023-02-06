export const getLocalStorage = () => {
    const news = JSON.parse(localStorage.getItem('news')) || []
    
    return news
}

export const getNewsLocalStorage = () => {
    const newsSelected = JSON.parse(localStorage.getItem('newsSelected')) || ''

    return newsSelected
}  

export const getLocalStorageID = () => {
    const newsCategory = JSON.parse(localStorage.getItem('newsID')) || []
    
    return newsCategory
}

export const getNewsLlStorage = () => {
    const newsLStorage= JSON.parse(localStorage.getItem('newsLStorage')) || []
    
    return newsLStorage
}
