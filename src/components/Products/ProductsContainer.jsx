import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, setProductsValues } from '../../redux/productsReduser'
import { addToCart } from '../../redux/userReduser'
import Products from './Products'

const ProductsContainer = () => {

    const products = useSelector(state => state.products.items) /* аналог mapStateToProps */
    const { queryToServerString, 
            totalProductsCount, 
            searchString,
            pageSize, currentPage } = useSelector(state => state.products)
    const dispatch = useDispatch() /* аналог mapDispatchToProps */
    
    const onPageChanged = (selectedPage) => {
        dispatch(setProductsValues({ currentPage: selectedPage }))
        // dispatch(getProducts(searchString, queryToServerString, selectedPage, pageSize))
        dispatch( { type: 'LOAD_DATA', payload: { searchString, queryString: queryToServerString, currentPage: selectedPage, pageSize} } )
    }

    const addProductToCart = (item) => {
        dispatch(addToCart(item))
    }

    useEffect(() => {
        dispatch(getProducts(searchString, queryToServerString))
    }, [dispatch, searchString, queryToServerString])


    return (
        <div>
            <Products 
                products={products}
                totalProductsCount={totalProductsCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                addProductToCart={addProductToCart}
            />
        </div>
    )
   
}

export default ProductsContainer