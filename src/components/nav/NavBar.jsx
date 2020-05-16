import React, { useContext } from 'react'
import { NavContainer, NavLink } from './NavStyles'
import { PageContext } from "../../context/PageContext";

const NavBar = () => {
  const { page, setPage } = useContext(PageContext);

  return (
    <NavContainer>
      <NavLink 
        className={page === "About" ? "nav-active" : ""}
        onClick={() => setPage("About")}
      >
        About
      </NavLink>
      <NavLink 
        className={page === "Education" ? "nav-active" : ""}
        onClick={() => setPage("Education")}
      >
        Education
      </NavLink>
      <NavLink 
        className={page === "Work" ? "nav-active" : ""}
        onClick={() => setPage("Work")}
      >
        Work
      </NavLink>
      <NavLink 
        className={page === "Contact" ? "nav-active" : ""}
        onClick={() => setPage("Contact")}
      >
        Contact
      </NavLink>
    </NavContainer>
  )
}

export default NavBar
