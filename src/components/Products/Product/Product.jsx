import React from 'react'
// import Classes from './Product.module.css'

const Product = ({ item, addProductToCart }) => {



    return (
        <div>
            <div>
                <h3>{item.title}</h3>
            </div>
            <div>
                <img src={item.imageUrl} alt='img'/>
            </div>
            <div>
                <span>Description: {item.description}</span>
            </div>
            <div>
                <span>Price: {item.price}</span>
            </div>
            <div>
                <button onClick={() => addProductToCart(item.id)}>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default Product