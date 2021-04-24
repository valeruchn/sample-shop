import { NavLink} from 'react-router-dom'
import Classes from './Categories.module.css'

const Categories = (props) => {

    return (
        <div className={Classes.Categories}>
            <NavLink to="/cat1" activeClassName="selected">Category 1</NavLink>
            <NavLink to="/cat2" activeClassName="selected">Category 2</NavLink>
            <NavLink to="/cat3" activeClassName="selected">Category 3</NavLink>
        </div>
    )
}

export default Categories;