import { debounce } from 'lodash-es'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsValues } from '../../../redux/productsReduser'

const SearchPanel = () => {
    useSelector(state => {
        const { items, sortBy } = state.products
        return {
            ...state,
            // Сортируем по цене, нужно вынести в функцию селектор
            items: items.sort((a, b) => sortBy === 'LOW' ? +a.price - +b.price : +b.price - +a.price)
        }
    })
    const dispatch = useDispatch()

    const onSearch = (e) => {
        const { target: { value } } = e
        dispatch(setProductsValues({ 
            searchString: value,
            filter: value!== ''? {search: value} : {}
        }))
    }

    const onSelectionChange = (e) => {
        const {target: { value, name }} = e
        console.log('name ' + name + ' value ' + value)
        dispatch(setProductsValues({ [name]: value }))
    }
    /* Добавить в input value для того, чтоб данные в форме отображались корректно,
    использовать formik */
    return (
        <div>
            <input type='text' placeholder='Search' onChange={debounce(onSearch, 1000)}/>
            <select name='currency' onChange={(e)=>onSelectionChange(e)}>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
            </select>
            <select name='sortBy' onChange={(e)=>onSelectionChange(e)}>
                <option value='LOW'>LOW</option>
                <option value='HIGH'>HIGH</option>
            </select>
        </div>
    )
}

export default SearchPanel