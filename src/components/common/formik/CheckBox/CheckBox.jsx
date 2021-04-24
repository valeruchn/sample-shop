import React from 'react'
import { useField } from 'formik'
import Classes from './CheckBox.module.css'


const CheckBox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <div>
            <label className={Classes.CheckBox}>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
}

export default CheckBox