import React from 'react';
import '../assets/styles/components/header.scss';

import logo from '../assets/img/edo-video-logo.png';
import userIcon from '../assets/img/user-icon.png';

const Header = () => (
    <header className="header">
        <img tabIndex="1" className="header__logo" src={logo} alt="Edo Video" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img className="header__menu--img" src={userIcon} alt="User" />
                <p>Profile</p>
            </div>
            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </header>
);

export default Header;