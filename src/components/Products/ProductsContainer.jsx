import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productsReduser'
import Products from './Products'

const ProductsContainer = memo(() => {

    const products = useSelector(state => state.products.items) /* аналог mapStateToProps */
    const dispatch = useDispatch() /* аналог mapDispatchToProps */

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    return (
        <div>
            <Products products={products}/>
        </div>
    )
   
})

export default ProductsContainer