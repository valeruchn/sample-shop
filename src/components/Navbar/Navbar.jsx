import React from 'react'
import Age from './Age/Age'
import Classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Price from './Price/Price'
import { useDispatch, useSelector } from 'react-redux'
import { sateAgeFilter } from '../../redux/filterReduser'


const Navbar = (props) => {

    const ageFilter = useSelector(state => state.filters.ageFilter)
    const dispatch = useDispatch()
    const dispatchFilterToState = (filter) => {
        dispatch(sateAgeFilter(filter))
    }

    return (
        <div className={Classes.Navbar}>
            <div className={Classes.navigationLink}>
                <NavLink to='/cabinet' activeClassName={Classes.active}>Cabinet</NavLink>
            </div>
            <div className={Classes.navigationLink}>
                <NavLink to='/products' activeClassName={Classes.active}>Shop</NavLink>
            </div>
            <div>
                <Age ageFilter={ageFilter} setFilter={dispatchFilterToState}/>
            </div> 
            <div>
                <Price />
            </div>
        </div>
    )
}

export default Navbar