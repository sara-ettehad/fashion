import React, { useState } from 'react';

import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

import "../style/footer.css"

const Footer = () => {
    
    const [isOpen, setIsOpen] = useState(false);



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
        
    return(
        <div class="container">

            <div class="bottom__totop">
                <button id="myBtn" title="top" >
                    <ScrollLink 
                        to="hero"
                        smooth={true} 
                        duration={500}
                        onClick={toggleMenu} // Close menu on click (if needed)
                    >
                    Top
                    </ScrollLink>
                </button>
            </div>

        </div>
    )
}

export default Footer;