import React, { useImperativeHandle, useRef } from "react"

import { Link } from "gatsby"

import * as styles from "../style/menu/menu.module.scss"

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.open = this.open.bind(this);
    }
    open() {
        !this.state.open ? this.setState({ open: true }) : this.setState({ open: false })
    }
    close() {
        this.setState({ open: false })
    }
    render() {
    
        // console.log(this.location)
        return (
            <div className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
                // onClick={() => this.close()}
                // onKeyDown={() => this.close()}
            >

                <ul className={styles.link}>
                    {/* <li> <MenuLink >aa</MenuLink> </li> */}
                    <li><Link to="/" activeClassName={styles.active} onClick={this.open} >Home</Link></li>
                    <li><Link partiallyActive={true} to="/about" activeClassName={styles.active} onClick={this.open} >About</Link></li>
                    <li><Link partiallyActive={true} to="/works" activeClassName={styles.active} onClick={this.open} >Works</Link></li>
                    <li><Link partiallyActive={true} to="/blogs" activeClassName={styles.active} onClick={this.open} >Blogs</Link></li>
                    <li><Link partiallyActive={true} to="/contacts" activeClassName={styles.active} onClick={this.open} >Contact</Link></li>
                </ul>
                <div className={styles.header}>
                    {/* make a link with h1 */}
                    <h1><Link to="/">Zulzidan</Link></h1>
                </div>
            </div>
        )
    }


  
}

export default React.forwardRef((props, ref) => {
    const menuRef = useRef()

    useImperativeHandle(ref, () => ({
        open() {
            menuRef.current.open()
        },
    }))

    return <Menu ref={menuRef} {...props} />
})