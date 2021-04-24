import React from 'react'
// import Classes from './Product.module.css'

const Product = (props) => {
    return (
        <div>
            <div>
                <h3>{props.item.title}</h3>
            </div>
            <div>
                <img src={props.item.imageUrl} alt='img'/>
            </div>
            <div>
                <span>Description: {props.item.description}</span>
            </div>
            <div>
                <span>Price: {props.item.price}</span>
            </div>
        </div>
    )
}

export default Product