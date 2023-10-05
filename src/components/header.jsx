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
    <header className="flex sticky items-center justify-between top-0 w-full z-20 border-b border-[#edf2f9] bg-white/70 px-3 lg:px-10 py-4 backdrop-blur-sm backdrop-saturate-[180%] ">
      <Link
        className='z-20 md:hidden'
        activeClassName={"active"}
        to="/"
      >
        <LogoFull />
      </Link>
      <Menu ref={(el) => (childMenu = el)} />
      <>
        <button
          className={`md:hidden translate-y-0 z-20 ${isOpen ? "menuOpen" : ""}`}
          onClick={() => toggleMenu()}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Hamburger label="Open menu" role="button" toggled={isOpen} size={24} />
        </button>
      </>
      <nav className="hidden md:flex justify-between items-center w-full">
        <ul className="flex justify-center items-center gap-2 font-heading text-lg  font-medium ">
          <li className="flex mr-12">
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
              About,
            </Link>
          </li>
          <li>
            <Link
              partiallyActive={true}
              activeClassName={"active"}
              to="/works/"
            >
              Works,
            </Link>
          </li>
          <li>
            <Link
              partiallyActive={true}
              activeClassName={"active"}
              to="/blogs/"
            >
              Blogs,
            </Link>
          </li>
          <li>
            <Link
              partiallyActive={true}
              activeClassName={"active"}
              to="/links/"
            >
              Links,
            </Link>
          </li>
        </ul>
        <div className="py-4">
          <a
            href="mailto:mail@zulzidan.com"
            className="border-b  border-solid border-gray-700 font-medium font-heading pb-1 my-4 text-lg"
          >
            mail@zulzidan.com
          </a>
        </div>
      </nav>
    </header>
  );

}

export default Header
