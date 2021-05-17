import { productsAPI } from "../utils/api"

const SET_STATE_PRODUCTS_VALUES = 'SET_STATE_VALUES'

const initialState = {
    loading: false,
    items: [],
    filter: {},
    queryToServerString: '', /* строка запроса на сервер */
    queryString: '', /* Строка поиска в браузере */
    searchString: '', /* Строка поиска на сайте */
    sortBy: 'LOW', /* Сортировка по цене */
    currency: 'USD', /* Валюта */
    totalProductsCount: null,
    pageSize: 5,
    currentPage: 1
}

const contentReduser = (state = initialState, action) => {
    const { type, payload} = action
    switch (type) {
        case SET_STATE_PRODUCTS_VALUES:
            return {
                ...state,
                ...payload
            }

        default:
            return state
    }
}

export const setProductsValues = (payload) => ({
    type: SET_STATE_PRODUCTS_VALUES, payload
})

export const getProducts = (searchString, queryString, currentPage, pageSize) => async (dispatch) => {

    const totalProductsCount = queryString !== '' || searchString !== ''
    /* Т.к. сервер не отдает в респонсе количество продуктов создаем два запроса
    один на получение всех продуктов, в случае если нет фильтра и один с учетом фильтра */
    ? await productsAPI.getTotalproductsCountWithFilter(queryString, searchString)
    : await productsAPI.getTotalProductsCount()
    
    const products = await productsAPI.getProducts(searchString, queryString, currentPage, pageSize)
    dispatch(setProductsValues({
        items: products,
        totalProductsCount: totalProductsCount
    }))
}

export default contentReduser