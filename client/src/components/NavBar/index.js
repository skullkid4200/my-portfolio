import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './Navbarelements.js';



const Navbar = () => {
  
  return (
    
    <div>
    <Nav>
    <Bars />

    <NavMenu>
        <>
      <NavLink to='/' activestyle = "true">
        Home
      </NavLink>
      <NavLink to='/coding' activestyle = "true">
        Coding
      </NavLink>
      <NavLink to='/twinbeds' activestyle = "true">
        Twin Beds
      </NavLink>
      <NavLink to='/art' activestyle = "true">
        Art
      </NavLink>
      <NavLink to='/writings' activestyle = "true">
        Writings
      </NavLink>
      <NavLink to='/warhammer' activestyle = "true">
        Warhammer 40k
      </NavLink>
      <NavLink to='/about' activestyle = "true">
        About
      </NavLink>
      <NavLink to='/contact' activestyle = "true">
        Contact Me
      </NavLink>
      <NavLink to='/game' activestyle = "true">
        Game
      </NavLink>
      </>
    </NavMenu>
  </Nav>
  </div>
  );
};
  
export default Navbar;