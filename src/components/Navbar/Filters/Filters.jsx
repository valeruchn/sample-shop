import React, { useEffect } from 'react'
// import Classes from './Filters.module.css'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsValues } from '../../../redux/productsReduser'
import { useHistory, useLocation } from 'react-router'
import { parse, stringify } from 'query-string'

const Filters = () => {

    const { filter, queryString } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    
    useEffect(() => {
      // Парсим URL и добавляем данные в фильтр в стейте
      const filterParseUrl = parse(location.search, {arrayFormat: 'comma'})
      if(location.search !== '') {
        console.log('диспатчим из адресной строки в фильтр')
        dispatch(setProductsValues({ filter: filterParseUrl }))
      }
    }, [dispatch, location.search])

    useEffect(() => {
      /* Если в поле поиска что то введено, то в стейте будет у фильтра свойство search */
      if (filter.search) {
        console.log('диспатчим из фильтра в searchString  в стейте')
        dispatch(setProductsValues({
          searchString: filter.search,
          queryString: '/products?search=' +  filter.search,
          queryToServerString: ''
        }))
      } else if(!filter.search) {
          // stringify преобразовывает массив, полученый из формы в строку поиска, атрибут comma
          // позволяет перечислить параметры через запятую если их несколько по одному ключу
          const query = stringify(filter, { arrayFormat: 'comma' })
          const queryToServer = stringify(filter)
          // диспатчим строку с get запросом в стор
          if(query !== '') {
            console.log('диспатчим из фильтра в кверистринг в стейте')
            console.log('queryToServer: ?'+ queryToServer)
            dispatch(setProductsValues({ 
              queryString: '/products?' +  query,
              queryToServerString: '&' + queryToServer
           })) 
            } else if (query === '') {
                   dispatch(setProductsValues({ 
                     queryString: '/products',
                     queryToServerString: ''
                  })) 
                }
        }
    }, [dispatch, filter])

    useEffect(() => {
      // при изменении queryString в стейте, пушим в адресную строку запрос
      if (queryString !== '') {
        console.log('пушим из кверистринг в адресную строку')
        console.log('queryString: ', queryString)
        history.push(queryString) 
      } 
    }, [history, queryString])

    return (
      /* enableReinitialize?: boolean - для того чтоб передать изменения в 
      initialValues */
      <Formik
      enableReinitialize={true}
      initialValues={{
        /* при выборе одного параметра - он передается как строка,
        для корректного отображения преобразовываем в массив */
        age: filter.age && typeof filter.age === 'string' ? filter.age.split() : filter.age,
        category: filter.category && typeof filter.category === 'string' ? filter.category.split() : filter.category
      }}
      onSubmit={(values) => {
        dispatch( setProductsValues({ 
          filter: values,
          searchString: ''
         }) )
      }}
    >
      {({ values }) => (
        <Form>
          <div>Возраст</div>
          <div>
            <div>
              <label>
                <Field type="checkbox" name="age" value="one" />
                One
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="age" value="two" />
                Two
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" name="age" value="three" />
                Three
              </label>
            </div>
          </div>
          <div>Категории</div>
          <div>
              <div>
                <label>
                    <Field type="checkbox" name="category" value="Kids" />
                    Kids
                </label>
              </div>
              <div>
                <label>
                    <Field type="checkbox" name="category" value="Baby" />
                    Baby
                </label>
              </div>
              <div>
                <label>
                    <Field type="checkbox" name="category" value="Shoes" />
                    Shoes
                </label>
              </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    )
}

export default Filters