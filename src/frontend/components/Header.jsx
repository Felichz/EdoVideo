import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../redux/actions/index';
import getGravatarUrl from '../utils/getGravatarUrl';

import '../assets/styles/components/header.scss';
import logo from '../assets/img/edo-video-logo.png';
import userIcon from '../assets/img/user-icon.png';

const Header = ({ user, logoutRequest }) => {
  const isLogged = !!user.email;

  const handleLogout = () => {
    logoutRequest();
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src={logo}
          alt='Edo Video'
        />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            className='header__menu--img'
            src={isLogged ? getGravatarUrl(user.email) : userIcon}
            alt={isLogged ? user.email : 'User'}
          />
          {isLogged ? user.name : <p>Account</p>}
        </div>
        <ul>
          {isLogged ? (
            <>
              <li>
                <Link to='/account'>Profile</Link>
              </li>
              <li onClick={handleLogout}>
                <Link to='/'>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
