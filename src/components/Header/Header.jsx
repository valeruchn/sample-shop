import React from 'react'
import { useSelector } from 'react-redux'
// import Classes from './Header.module.css'

const Header = (props) => {

    const cart = useSelector(state => state.userData.cart)

    return (
        <div>В корзине: {cart ? cart.length: 0} товаров</div>
    )
}

export default Header