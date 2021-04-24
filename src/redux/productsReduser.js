import { productsAPI } from "../utils/api"

const SET_PRODUCTS = 'SET_PRODUCTS'

const initialState = {
    items: []
}

const contentReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                items: action.products
            }

        default:
            return state
    }
}

export const setProducts = (products) => ({
    type: SET_PRODUCTS, products
})

export const getProducts = () => async (dispatch) => {
    const products = await productsAPI.getProducts()
    dispatch(setProducts(products))
}

export default contentReduser