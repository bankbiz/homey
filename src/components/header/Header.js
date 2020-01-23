import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';

export default (props) => {
    return (
        <header className="header-component">
            <nav className="nav-bar">
                <div className="nav-logo">
                    HOMEY.
                </div>
                <div className="nav-spacer"></div>
                <div className="nav-menu">
                    <ul className="menu-list">
                        <li>
                            <NavLink
                                to="/"
                                exact
                                className="nav-link non-last-menu"
                                onClick={() => props.renderRoom('livingRoom')}
                            >Living Room</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/kitchen"
                                exact
                                className="nav-link non-last-menu"
                                onClick={() => props.renderRoom('kitchenRoom')}
                            >Kitchen</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dining"
                                exact
                                className="nav-link"
                                onClick={() => props.renderRoom('diningRoom')}
                            >Dining</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-spacer"></div>
                <div className="nav-search">
                    <img src={props.searchIcon} alt="search" />
                    <div className="search-text">
                        search here
                    </div>
                </div>
                <div className="nav-cart">
                    <img src={props.cartIcon} alt="cart" />
                </div>
            </nav>
        </header>
    );
}