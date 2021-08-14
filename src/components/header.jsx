import React, {useState} from 'react'
import { Link } from "gatsby"
import Menu from './menu'
import Hamburger from 'hamburger-react'



const Header = (childMenu) => {

    // make a state for the menu with false
    const [isOpen, setIsOpen] = useState(true)
    

    function toggleMenu() {
        childMenu.open();
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
            <Menu ref={el => (childMenu = el)} />
            <>
                <button className={`MenuButton ${isOpen ? "menuOpen" : null}`} onClick={() => toggleMenu()}>
                    <Hamburger toggled={isOpen} />
                </button>
            </>
            <nav className="nav">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/works" >Works</Link></li>
                    <li><Link to="/blogs" >Blogs</Link></li>
                </ul>
                <button>
                    Contacts
                </button>
            </nav>
        </header>
    )
    
}

export default Header
