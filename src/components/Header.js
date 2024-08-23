import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";


import "../style/header.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="header__wrapper--first">
                <nav  className={isOpen ? 'nav-open' : ''}>
                    <ul>
                        <li className="bm-item-list">
                            <ScrollLink 
                                to="about"
                                smooth={true} 
                                duration={500}
                                onClick={toggleMenu} // Close menu on click (if needed)
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className="bm-item-list">
                            <ScrollLink 
                                to="sale"
                                smooth={true} 
                                duration={500}
                                onClick={toggleMenu} // Close menu on click (if needed)
                            >
                                Sales
                            </ScrollLink>
                        </li>
                        <li className="bm-item-list">   
                            <ScrollLink 
                                to="collection"
                                smooth={true} 
                                duration={500}
                                onClick={toggleMenu}
                            >
                                Collection
                            </ScrollLink>
                        </li>
                        <div className="header__wrapper--right-nav">

                            <button type="button" className="signup__btn">
                                <CiSearch/>
                            </button>
                
                            <button type="button" className="signup__btn">
                                Sign up
                            </button>
                            <button type="button" className="signup__btn">
                                Login
                            </button>
                            <button type="button" className="signup__btn">
                                <SlBasket/>
                            </button>
                        </div>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <div className="header__wrapper--mid">

                <h1>FEEME</h1>
                <sub>Best fashion shoping experiences</sub>

            </div>
            
            <div className="header__wrapper--right">

                <button type="button" className="signup__btn">
                    <CiSearch/>
                </button>
                
                <button type="button" className="signup__btn">
                    Sign up
                </button>
                <button type="button" className="signup__btn">
                    Login
                </button>
                <button type="button" className="signup__btn">
                    <SlBasket/>
                </button>
            </div>

        </header>
    );
};

export default Header;