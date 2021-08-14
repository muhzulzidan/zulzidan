import React, { useImperativeHandle, useRef } from "react"

import { Link } from "gatsby"

import * as styles from "../style/menu/menu.module.scss"

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    render() {
        return (
            <div
                // role="button"
                // tabIndex="0"
                className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
                // onClick={() => this.close()}
                // onKeyDown={() => this.close()}
            >

                <ul className={styles.link}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/works" >Works</Link></li>
                    <li><Link to="/blogs" >Blogs</Link></li>
                </ul>
                <div className={styles.header}>
                    {/* make a link with h1 */}
                    <h1><Link to="/">Zulzidan</Link></h1>
                </div>
            </div>
        )
    }

    close() {
        this.setState({ open: false })
    }

    open() {
        !this.state.open ? this.setState({ open: true }) : this.setState({ open: false })
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