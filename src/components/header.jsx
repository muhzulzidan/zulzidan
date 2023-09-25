import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import { Spiral as Hamburger } from 'hamburger-react'

import Menu from './menu'
import LogoFull from '../svg/logoFull.svg'

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
    <header className="flex sticky items-center justify-between top-0 w-full z-20 border-b border-[#edf2f9] bg-white/70 px-3 py-4 backdrop-blur-sm backdrop-saturate-[180%] ">
      <Link
        className='z-20'
        activeClassName={"active"}
        to="/"
      >
        <LogoFull />
      </Link>
      <Menu ref={(el) => (childMenu = el)} />
      <>
        <button
          className={` translate-y-0 z-20 ${isOpen ? "menuOpen" : ""}`}
          onClick={() => toggleMenu()}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Hamburger label="Open menu" role="button" toggled={isOpen} size={24} />
        </button>
      </>
      <nav className="hidden md:flex">
        <ul className="flex ">
          <li>
            <Link
              activeClassName={"active"}
              to="/"
            >
              <LogoFull />
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
