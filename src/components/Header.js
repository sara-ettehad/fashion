import React from 'react';

const Header = () => {

    return (
        <header className="header__wrapper">
            <div className="header__wrapper--mid">

                <h1>FEEME</h1>
                <sub>Best fashion shoping experiences</sub>

            </div>
            <nav>
                <ul>
                    <a className="bm-item-list" href="/" activeClassName="active">New Arival</a>
                    <a className="bm-item-list" href="/" activeClassName="active">Sales</a>
                    <a className="bm-item-list" href="/" activeClassName="active">About</a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;