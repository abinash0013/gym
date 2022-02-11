import React, { useState } from "react";
import logo from "./../images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to="main" className="logo" smooth={true} duration={1000}>
                <img src={logo} alt="" />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li>
                    <Link smooth={true} duration={1000} to="main">
                        Home
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={1000} to="features">
                        Features
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={1000} to="offer">
                        Offer
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={1000} to="about">
                        About
                    </Link>
                </li>
                <li>
                    <Link smooth={true} duration={1000} to="contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
