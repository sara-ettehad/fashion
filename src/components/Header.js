import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink


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
                
                            <Link to="/signup">
                                <button type="button" className="signup__btn">
                                    Sign Up
                                </button>
                            </Link>
                            <Link to="/signin">
                                <button type="button" className="signup__btn">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    </ul>
                </nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <Link to="/fashion" className="femme">
                <div className="header__wrapper--mid">

                    <h1>FEMME</h1>
                    <sub>Best fashion shoping experiences</sub>

                </div>
            </Link>

            
            <div className="header__wrapper--right">
                
            <Link to="/signup">
                <button type="button" className="signup__btn">
                    Sign Up
                </button>
            </Link>
            <Link to="/signin">
                <button type="button" className="signup__btn">
                    Sign In
                </button>
            </Link>
            </div>

        </header>
    );
};

export default Header;