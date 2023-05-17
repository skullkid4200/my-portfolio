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
      </>
    </NavMenu>
  </Nav>
  </div>
  );
};
  
export default Navbar;