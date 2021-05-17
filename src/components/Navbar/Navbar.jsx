import React from 'react'
import Filters from './Filters/Filters'
import Classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {

    return (
        <div className={Classes.Navbar}>
            <div className={Classes.navigationLink}>
                <NavLink to='/cabinet' activeClassName={Classes.active}>Cabinet</NavLink>
            </div>
            <div className={Classes.navigationLink}>
                <NavLink to='/products' activeClassName={Classes.active}>Shop</NavLink>
            </div>
            <div>
                <Filters/>
            </div> 
        </div>
    )
}

export default Navbar