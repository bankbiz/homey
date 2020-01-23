import React from 'react';
import { NavLink } from "react-router-dom"

import './BurgerMenu.css';

export default (props) => {
    return (
        <div className="burger-menu" style={props.burgerStyle}>
            <div className="burger-open burger-element" onClick={props.openBurger}>
                <img src={props.openIcon} alt="open-icon" />
            </div>

            <div className="burger-menu-list burger-element">
                <NavLink to="/" exact className="burger-link" onClick={() => props.renderRoom('livingRoom')}>Living Room</NavLink>
                <NavLink to="/kitchen" exact className="burger-link" onClick={() => props.renderRoom('kitchenRoom')}>Kitchen</NavLink>
                <NavLink to="/dining" exact className="burger-link" onClick={() => props.renderRoom('diningRoom')}>Dining</NavLink>
            </div>
            <div className="burger-search burger-element" style={props.SearchAndCartIconStyle}>
                <img src={props.searchIcon} alt="search" />
            </div>
            <div className="burger-cart burger-element" style={props.SearchAndCartIconStyle}>
                <img src={props.cartIcon} alt="cart" />
            </div>
        </div>
    );
}