import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LivingPage, KitchenPage, DiningPage } from './pages';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BurgerMenu from './components/burgerMenu/BurgerMenu';

import messengerIcon from './assets/images/icon-messenger.svg';
import lineIcon from './assets/images/icon-line.svg';
import dribbbleIcon from './assets/images/icon-dribbble.svg';
import searchIcon from './assets/images/icon-search.svg';
import cartIcon from './assets/images/icon-cart.svg';
import bergerIcon from './assets/images/icon-hamberger.svg';
import xIcon from './assets/images/icon-x.svg';
import kitchenBg from './assets/images/room-kitchen-bg.jpg';
import diningBg from './assets/images/room-dining-bg.jpg';
import livingBg from './assets/images/room-living-bg.jpg';

import './HomeyApp.css';

export default () => {
    const [isOpened, setOpened] = useState(false);
    const openBurger = () => setOpened(!isOpened);

    const [room, setRoom] = useState('livingRoom');
    const renderRoom = (room) => setRoom(room);

    let openIcon = (isOpened) ? xIcon : bergerIcon,
        SearchAndCartIconStyle = (isOpened) ? { display: 'initial' } : { display: 'none' },
        burgerStyle = (isOpened) ? { backgroundColor: 'rgba(125, 125, 125, 0.65)' } : {},
        containerStyle = 
            (room === 'kitchenRoom') ? { backgroundImage: `url(${kitchenBg})` } : 
            (room === 'diningRoom') ? { backgroundImage: `url(${diningBg})` } : 
            { backgroundImage: `url(${livingBg})` };

    return (
        <div className="homey-container" style={containerStyle}>
            {/* <div className="room-background">
                <Room3dModel room3dModel={room3dModel} room={room} />
            </div> */}
            <div className="homey-content">
                <Router>
                    <Header cartIcon={cartIcon} searchIcon={searchIcon} renderRoom={renderRoom} />
                    <BurgerMenu
                        burgerStyle={burgerStyle}
                        openBurger={openBurger}
                        openIcon={openIcon}
                        cartIcon={cartIcon}
                        searchIcon={searchIcon}
                        SearchAndCartIconStyle={SearchAndCartIconStyle}
                        renderRoom={renderRoom}
                    />

                    <Route path='/' exact component={LivingPage} />
                    <Route path='/kitchen' exact component={KitchenPage} />
                    <Route path='/dining' exact component={DiningPage} />
                </Router>
            </div>
            <Footer dribbbleIcon={dribbbleIcon} lineIcon={lineIcon} messengerIcon={messengerIcon} />
        </div>
    );
}
