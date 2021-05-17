import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleWare from 'redux-thunk'
import productsReduser from './productsReduser'

let redusers = combineReducers({
    products: productsReduser,
})

let store = createStore(redusers, applyMiddleware(thunkMiddleWare))


window.store = store

export default store



