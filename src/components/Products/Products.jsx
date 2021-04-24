import React from 'react'
// import Classes from './Products.module.css'
import Product from './Product/Product.jsx'

const Products = (props) => {
    
    if (props.products){
        const productElements = props.products.map(item => 
            <Product item={item} key={item.id} />
          )

        return (
            <div>
                {productElements}
            </div>
        )
    } else {
        return (
            <div>
                загрузка
            </div>
        )
    }
       
}

export default Products