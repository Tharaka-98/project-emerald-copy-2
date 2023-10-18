import React from 'react'
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "home", text: "dashboard" },
  { id: 2, url: "advertisement", text: "advertisement" },
  { id: 3, url: "email", text: "mail" },
  { id: 4, url: "contact", text: "contact" },
  { id: 5, url: "quotations", text: "quotations" },
];

const NavLinks = () => {
  return (
    <>
    {links.map((link) => {
      const { id, url, text } = link;
      return (
        <li key={id}>
          <NavLink className="capitalize" to={url}>
            {text}
          </NavLink>
        </li>
      );
    })}
  </>
  )
}

export default NavLinks