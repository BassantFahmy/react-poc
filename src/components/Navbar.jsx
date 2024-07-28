import React from 'react'
import logo from '../assets/images/bird_2.jpg';
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaWindowClose  } from "@react-icons/all-files/fa/FaWindowClose";

import { NavLink } from "react-router-dom";

const Navbar = ({ clickHandle ,isDrawerAppears}) => {

  return (
    <>
      <nav className="navbar t-pr-m t-pl-m" id="navbar">
        <a onClick={(e) => clickHandle(e)}> {isDrawerAppears?<FaWindowClose  />:<FaBars />}</a>
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar__list">
          <li className="navbar__list__dropdown">
            <NavLink to="/Home" className="btn btn--rectangle btn--white">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Services" className="btn btn--rectangle btn--white">Services</NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" className="btn btn--rectangle btn--white">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="btn btn--rectangle btn--white">Contact</NavLink>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
