import React from 'react'
import Product from './Product/Product.jsx'
import Classes from './Products.module.css'
import SearchPanel from './SearchPanel/SearchPanel.jsx'

const Products = ({products, totalProductsCount, pageSize, currentPage, onPageChanged}) => {
    const pagesCount = Math.ceil(totalProductsCount / pageSize)
    const pages = [...Array(pagesCount).keys()].map((_, i) => i + 1)
    
    if (products){
        const productElements = products.map(item => 
            <Product item={item} key={item.id} />
          )

        return (

            <div>
                <div>
                    <SearchPanel />
                </div>
                {
                    pages.map(page => { 
                       if(currentPage === page) {
                        return <span 
                            className={Classes.selectedPage} 
                            key={page.toString()}
                            onClick={() => onPageChanged(page)}
                            >{page}</span>
                       } else {
                        return <span key={page.toString()} onClick={() => onPageChanged(page)}>{page}</span>
                       }         
                    })
                }
                <div>
                    {productElements}
                </div>
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