import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    responseType: 'json'
})

export const productsAPI = {
    async getProducts() {
        const result = await instance.get('items')
        return result.data
    }
}