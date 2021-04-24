import React from 'react'
import { Formik, Form, Field } from 'formik'

const Price = (props) => {
    return (
        <div>
            <Formik
              initialValues={{
                selectedPrice: '',
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
                <Form>
                  <div role="group" aria-labelledby="price-selected">
                    <div>
                        <label>
                          <Field type="radio" name="selectedPrice" value="p1" />
                          0 - 500
                        </label>
                    </div>
                    <div>
                        <label>
                          <Field type="radio" name="selectedPrice" value="p2" />
                          500 - 1000
                        </label>
                    </div>
                    <div>
                        <label>
                          <Field type="radio" name="selectedPrice" value="p2" />
                          1000 - 1500
                        </label>
                    </div>
                  </div>
                  <button type="submit">Применить</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Price