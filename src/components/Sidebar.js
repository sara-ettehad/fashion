import React from "react";

import {slide as Menu} from 'react-burger-menu';


class Sidebar extends React.Component{
    render(){
        
        return (
            <div className="header__wrapper">

            <Menu className="bm-menu">
                <a className="bm-item-list" href="/" activeClassName="active">New Arival</a>
                <a className="bm-item-list" href="/" activeClassName="active">Sales</a>
                <a className="bm-item-list" href="/" activeClassName="active">About</a>
            </Menu>
    

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
            </div>
        );
    }
};

export default Sidebar;