import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMiddleWare from 'redux-thunk'
import productsReduser from './productsReduser'
import userReduser from './userReduser'
import createSagaMiddleware from 'redux-saga'

let redusers = combineReducers({
    products: productsReduser,
    userData: userReduser
})

// Подключаем сагу
export const sagaMiddleware = createSagaMiddleware()

// Для подключения redux extention в хром
// @ts-ignore - typeScript проигнорирует следующую строку
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleWare, sagaMiddleware)))


window.store = store

export default store



