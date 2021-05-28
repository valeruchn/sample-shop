import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsValues } from '../../../redux/productsReduser'

const SearchPanel2 = () => {
	 useSelector(state => {
        const { items, sortBy } = state.products
        return {
            ...state,
            items: items.sort((a, b) => sortBy === 'LOW' ? +a.price - +b.price : +b.price - +a.price)
        }
    })

	const { searchString, currency, sortBy } = useSelector(state => state.products)

    const dispatch = useDispatch()

    
    return (
    	<Formik
    	  enableReinitialize={true}
    	  initialValues={{
    	    searchString,
			currency,
			sortBy
    	  }}
    	  onSubmit={(values) => {
    	    dispatch( setProductsValues({
				...values,
				filter: values.searchString !== ''? {search: values.searchString} : {}
			}) )
    	  }}
    	>
    	  {({ values }) => (
    	    <Form>
    	    	<Field type='text' placeholder='Search' name="searchString" />
    	       		<Field component="select" name='currency'>
    	         		<option value="USD">USD</option>
    	         		<option value="EUR">EUR</option>
    	       		</Field>
    	       		<Field component="select" name='sortBy'>
    	         		<option value="LOW">LOW</option>
    	         		<option value="HIGH">HIGH</option>
    	       		</Field>
    	      	<button type="submit">Search</button>
    	    </Form>
    	  )}
    	</Formik>	
    )
}

export default SearchPanel2