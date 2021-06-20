import { productsAPI } from "../utils/api"
import { put } from 'redux-saga/effects'
import { setProductsValues } from "./productsReduser"

export function* workerSetProducts(searchString, queryString, currentPage, pageSize) {

    const totalProductsCount = yield queryString !== '' || searchString !== ''
    /* Т.к. сервер не отдает в респонсе количество продуктов создаем два запроса
    один на получение всех продуктов, в случае если нет фильтра и один с учетом фильтра */
    ? yield productsAPI.getTotalproductsCountWithFilter(queryString, searchString)
    : yield productsAPI.getTotalProductsCount()

    const products = yield productsAPI.getProducts(searchString, queryString, currentPage, pageSize)
    yield put(setProductsValues({
        items: products,
        totalProductsCount: totalProductsCount
    }))
  }