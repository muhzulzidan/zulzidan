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


  return (
    <header className="header">
      <Menu ref={(el) => (childMenu = el)} />
      <>
        <button
          className={`MenuButton ${isOpen ? "menuOpen" : ""}`}
          onClick={() => toggleMenu()}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Hamburger label="Open menu" role="button" toggled={isOpen} />
        </button>
      </>
      <nav className="nav">
        <ul>
          <li>
            <Link
              activeClassName={"active"}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              partiallyActive={true}
              activeClassName={"active"}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              partiallyActive={true}
              activeClassName={"active"}
              to="/works/"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              partiallyActive={true}
              activeClassName={"active"}
              to="/blogs/"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              partiallyActive={true}
              activeClassName={"active"}
              to="/links/"
            >
              Links
            </Link>
          </li>
        </ul>
        <a href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20saya" className="">
          <button className={`contacts ${show && "black"}`}>
            Contacts
          </button>
        </a>
      </nav>
    </header>
  );

}

export default Header
