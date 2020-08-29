import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => (
    <>
        <div className="nav-block">
                <ul className="nav-links">
                    <li><NavLink exact to="/"
                                 activeStyle={{
                                     color: "FireBrick"
                                 }}>Quotes</NavLink></li>

                    <li><NavLink exact to="/add-quote"
                                 activeStyle={{
                                     color: "FireBrick"
                                 }}>Add quotes</NavLink></li>
                </ul>
        </div>
    </>
);

export default NavBar;