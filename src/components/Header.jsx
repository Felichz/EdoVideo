import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';

import logo from '../assets/img/edo-video-logo.png';
import userIcon from '../assets/img/user-icon.png';

const Header = () => (
    <header className="header">
        <Link to="/">
            <img tabIndex="1" className="header__logo" src={logo} alt="Edo Video" />
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img className="header__menu--img" src={userIcon} alt="User" />
                <p>Profile</p>
            </div>
            <ul>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        Register
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;