import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import { Spiral as Hamburger } from 'hamburger-react'

import Menu from './menu'
import LogoFull from '../svg/logoFull.svg'

const Header = ({ childMenu, landingPage }) => {

  const landingPages = landingPage || false;

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

  console.log(landingPage,"landingPage")
  console.log(landingPages,"landingPages")
  return (
    <header className="flex sticky items-center justify-between top-0 w-full z-20 border-b border-[#edf2f9] bg-white/70 px-3 lg:px-10 py-4 backdrop-blur-sm backdrop-saturate-[180%] ">
      <Link
        className='z-20 md:hidden'
        activeClassName={"active"}
        to="/"
        aria-label="Home"
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
        <ul className="flex justify-center items-center gap-2 font-heading text-lg font-medium">
          <li className="flex mr-12">
            <Link activeClassName="text-indigo-600" to="/" aria-label="Home">
              <LogoFull />
            </Link>
          </li>
          {landingPages ? 
          
          (
            <div>
              
            </div>
          )
          : 
          
            (
              <>
                <li>
                  <Link
                    partiallyActive={true}
                    activeClassName="text-indigo-600"
                    className="hover:text-indigo-600"
                    to="/about/"
                  >
                    About,
                  </Link>
                </li>
                <li>
                  <Link
                    partiallyActive={true}
                    activeClassName="text-indigo-600"
                    className="hover:text-indigo-600"
                    to="/works/"
                  >
                    Works,
                  </Link>
                </li>
                <li>
                  <Link
                    partiallyActive={true}
                    activeClassName="text-indigo-600"
                    className="hover:text-indigo-600"
                    to="/blogs/"
                  >
                    Blogs,
                  </Link>
                </li>
                <li>
                  <Link
                    partiallyActive={true}
                    activeClassName="text-indigo-600"
                    className="hover:text-indigo-600"
                    to="/links/"
                  >
                    Links,
                  </Link>
                </li>
                <li>
                  <Link
                    partiallyActive={true}
                    activeClassName="text-indigo-600"
                    className="hover:text-indigo-600"
                    to="/services/"
                  >
                    Services,
                  </Link>
                </li>
                <li>
                  <Link
                    partiallyActive={true}
                    activeClassName="text-indigo-600"
                    className="hover:text-indigo-600"
                    to="/audit-website/"
                  >
                    Audit,
                  </Link>
                </li>
              </>
            )
          }
        </ul>


        <div className="py-4">
          <a
            href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20mau%20buat%20website"
            className="border-b  border-solid border-gray-700 font-medium font-heading pb-1 my-4 text-lg hover:text-indigo-600 hover:border-indigo-600"
          >
            Chat on Whatsapp
          </a>
        </div>
      </nav>
    </header>
  );

}

export default Header
