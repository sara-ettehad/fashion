import React from 'react';

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <a className="bm-item-list" href="/" activeClassName="active">New Arival</a>
                    <a className="bm-item-list" href="/" activeClassName="active">Sales</a>
                    <a className="bm-item-list" href="/" activeClassName="active">About</a>
                </ul>
            </nav>

            <div className="header__wrapper--mid">

                <h1>FEEME</h1>
                <sub>Best fashion shoping experiences</sub>

            </div>
            
            <div className="header__wrapper--right">
                
                <button type="button" className="btn btn__primary navbar__btn signup">
                    Sign up
                </button>
                <button type="button" className="btn btn__primary navbar__btn login">
                    Login
                </button>
                
            </div>

        </header>
    );
};

export default Header;