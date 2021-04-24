import React, { useEffect } from 'react'
import Classes from './Age.module.css'
import { Formik, Form } from 'formik'
import CheckBox from '../../common/formik/CheckBox/CheckBox'

const Age = ({ ageFilter, setFilter }) => {


    useEffect(() => {
      console.log(ageFilter)
    }, [ageFilter])
    // Собираем только подтвержденные елементы в фильтр
    const filter = (values) => {
      const filter = {}
      for (let key in values) {
        if (values.hasOwnProperty(key) && values[key] === true) {
          filter[key] = values[key]
        }
      }
      return filter
    }

    return (
        <div className={Classes.Age}>
            <Formik
                initialValues={{
                  age1: false,
                  age2: false,
                  age3: false
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setFilter(filter(values))
                    setSubmitting(false)
                }}
            >
         <Form>
           <CheckBox name="age1">
             1 месяц - 6 месяцев
           </CheckBox>
           <CheckBox name="age2">
             6 месяцев - 1 год
           </CheckBox>
           <CheckBox name="age3">
             1 год - 3 года
           </CheckBox>
           <button type="submit">Применить</button>
         </Form>
       </Formik>
        </div>
    )
}

export default Age