import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import Menu from './menu'
import Hamburger from 'hamburger-react'



const Header = (childMenu) => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
    // make a state for the menu with false
    const [isOpen, setIsOpen] = useState(false)
    

    function toggleMenu() {
        childMenu.open();
        setIsOpen(!isOpen);
    }

    // console.log(show)

    return (
      <header className="header">
        <Menu ref={(el) => (childMenu = el)} />
        <>
          <button
            className={`MenuButton ${isOpen ? "menuOpen" : null}`}
            onClick={() => toggleMenu()}
          >
            <Hamburger toggled={isOpen} />
          </button>
        </>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
          </ul>
          <button className={`contacts ${show && "black"}`}>
            Contacts
          </button>
        </nav>
      </header>
    );
    
}

export default Header
