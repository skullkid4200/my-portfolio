import React, { useState } from 'react';
import {
  NavLink,
  NavMenu
} from './Navbarelements.js';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (


    <div className="flex justify-center h-20 bg-[#2F4550]">
      <div className="flex items-center justify-between py-8">

        <nav>
          <section className="MOBILE-MENU flex md:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 bg-gray-800"></span>
              <span className="block h-0.5 w-8 bg-gray-800"></span>
              <span className="block h-0.5 w-8 bg-gray-800"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/">Home</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/coding">Coding</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/twinbeds">Music</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/art">Art</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/writings">Writings</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/warhammer">WARHAMMER 40k</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact Me</a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: ;
        top: 0;
        left: 0;
        background: #ECECEC;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 0px 0px 25px 25px;
      }
    `}</style>
      </div>
      <NavMenu className="font-mono">
        <NavLink to='/' activestyle="true">
          Home
        </NavLink>
        <NavLink to='/coding' activestyle="true">
          Coding
        </NavLink>
        <NavLink to='/twinbeds' activestyle="true">
          Music
        </NavLink>
        <NavLink to='/art' activestyle="true">
          Art
        </NavLink>
        <NavLink to='/writings' activestyle="true">
          Writings
        </NavLink>
        <NavLink to='/warhammer' activestyle="true">
          WARHAMMER 40k
        </NavLink>
        <NavLink to='/about' activestyle="true">
          About
        </NavLink>
        <NavLink to='/contact' activestyle="true">
          Contact Me
        </NavLink>
      </NavMenu>
    </div>

  );
};

export default Navbar;