import React from 'react'
import { NavLink } from 'react-router-dom'
const SideNavBar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <NavLink to='/Products'>Products</NavLink>
                </li>
                <li>
                    <a>Resume</a>

                </li>
                <li>  <a>Details</a>
                </li>
            </ul>
        </div>
    )
}

export default SideNavBar
