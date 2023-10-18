import React from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logoMain from "../assets/images/Logo.png";
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element ">
        <div className="navbar-start">
          {/* Title */}

          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks/>
            </ul>
          </div>
          <NavLink to="/">
            <div className="w-24 rounded-xl hidden lg:block">
              <img src={logoMain} />
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* QUOTE*/}
          <NavLink
            to="quote"
            className="btn btn-outline btn-success btn-md ml-4 text-capitalize"
          >
            Get A Quote
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar