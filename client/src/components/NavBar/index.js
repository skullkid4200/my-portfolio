import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './Navbarelements.js';

const Navbar = () => {

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  return (

    <div>
      <Nav>

        
        <Bars className="hamburger" onClick={toggleMenu}>
          <i className = "menuIcon material-icons">menu</i>
          <i className = "closeIcon material-icons">close</i>
        </Bars>
        
        
          


        <NavMenu className="menu">
          <>
            <NavLink className="menuItem" to='/' activestyle="true">
              Home
            </NavLink>
            <NavLink className="menuItem" to='/coding' activestyle="true">
              Coding
            </NavLink>
            <NavLink className="menuItem" to='/twinbeds' activestyle="true">
              Twin Beds
            </NavLink>
            <NavLink className="menuItem" to='/art' activestyle="true">
              Art
            </NavLink>
            <NavLink className="menuItem" to='/writings' activestyle="true">
              Writings
            </NavLink>
            <NavLink className="menuItem" to='/warhammer' activestyle="true">
              Warhammer 40k
            </NavLink>
            <NavLink className="menuItem" to='/about' activestyle="true">
              About
            </NavLink>
            <NavLink className="menuItem" to='/contact' activestyle="true">
              Contact Me
            </NavLink>
          </>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;