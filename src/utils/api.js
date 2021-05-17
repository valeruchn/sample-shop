import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    responseType: 'json'
})

export const productsAPI = {
    /* Т.к. сервер не отдает в респонсе количество продуктов создаем два запроса
    один на получение всех продуктов, в случае если нет фильтра и один с учетом фильтра */
    async getTotalProductsCount() {
        const productsCount = await (await instance.get('items')).data.length
        return productsCount
    },
    async getTotalproductsCountWithFilter(queryString = '', searchString = '') {
        const productsCount = await (await instance.get(`items?title_like=${searchString}` + queryString)).data.length
        return productsCount
    },
    async getProducts(searchString = '', queryString = '', currentPage = 1, pageSize = 5) {
        const result = await instance.get(`items?_page=${currentPage}&_limit=${pageSize}&title_like=${searchString}` + queryString)
        return result.data
    }
}