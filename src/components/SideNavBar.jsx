import React from 'react'
import {Link} from 'react-router-dom'
const SideNavBar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                      <Link to='/Products'>Products</Link>
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
