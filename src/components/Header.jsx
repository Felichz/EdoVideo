import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getGravatarUrl from '../utils/getGravatarUrl';

import '../assets/styles/components/header.scss';
import logo from '../assets/img/edo-video-logo.png';
import userIcon from '../assets/img/user-icon.png';

const Header = ({user}) => (
    <header className="header">
        <Link to="/">
            <img tabIndex="1" className="header__logo" src={logo} alt="Edo Video" />
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img
                    className="header__menu--img"
                    src={ user.email ? getGravatarUrl(user.email) : userIcon }
                    alt={ user.email ? user.email : "User" }
                />
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

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Header);