import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleWare from 'redux-thunk'
import filterReduser from "./filterReduser"
import productsReduser from './productsReduser'

let redusers = combineReducers({
    products: productsReduser,
    filters: filterReduser
})

let store = createStore(redusers, applyMiddleware(thunkMiddleWare))


window.store = store

export default store



