import React from 'react';
import './Footer.css';

export default (props) => {
    return (
        <footer>
            <div className="copyright-text">
                from <b id="bank-biz">BANKBIZ</b>
            </div>
            <div className="social-bar">
                <a href="https://dribbble.com/bankbiz" target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src={props.dribbbleIcon} alt="dribbble-logo" />
                </a>
                <a href="https://line.me/ti/p/VZzFyNiCVP" target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src={props.lineIcon} alt="line-logo" />
                </a>
                <a href="https://www.messenger.com/t/thaworn.kangwansinghanat1" target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src={props.messengerIcon} alt="messenger-logo" />
                </a>
            </div>
        </footer>
    );
}