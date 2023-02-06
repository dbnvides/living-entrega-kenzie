const getPostNews = async (page) => {
    try {
        const resquest = await fetch(`https://m2-api-living.herokuapp.com/news?page=${page}`, {
            method: 'GET',
            headers: {
                'Content': 'Application/json',
            },
        })
        const response = await resquest.json()
        if(resquest.ok){
            localStorage.setItem('news', JSON.stringify(response))
            return response
        }
    } catch(err) {
        console.log(err)
    }

}

const getPostID = async (id) => {
    try {
        const resquest = await fetch(`https://m2-api-living.herokuapp.com/news/${id}`, {
            method: 'GET',
            headers: {
                'Content': 'Application/json',
            },
        })
        const response = await resquest.json()
        if(resquest.ok){
            localStorage.setItem('newsSelected', JSON.stringify(response))
            return response
        }
    } catch(err) {
        console.log(err)
    }

}





export { getPostNews, getPostID}