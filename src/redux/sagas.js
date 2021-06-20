import { productsAPI } from "../utils/api"
import { call, put, takeEvery } from 'redux-saga/effects'
import { setProductsValues } from "./productsReduser"

export function* workerSetProducts(action) {
    const { searchString, queryString, currentPage, pageSize } = action.payload
    const totalProductsCount = queryString !== '' || searchString !== ''
    /* Т.к. сервер не отдает в респонсе количество продуктов создаем два запроса
    один на получение всех продуктов, в случае если нет фильтра и один с учетом фильтра */
    ? yield call(productsAPI.getTotalproductsCountWithFilter, queryString, searchString)
    : yield call(productsAPI.getTotalProductsCount)

    const products = yield call(productsAPI.getProducts, searchString, queryString, currentPage, pageSize)
    yield put(setProductsValues({
        items: products,
        totalProductsCount: totalProductsCount
    }))
  }

  export function* watchSetProducts() {
      yield takeEvery('LOAD_DATA', workerSetProducts)
  }