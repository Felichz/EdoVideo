import React from 'react';
import {Link} from 'react-router-dom';

import googleIcon from '../assets/img/google-icon2.png';
import twitterIcon from '../assets/img/twitter-icon2.png';

import '../assets/styles/components/account-form.scss';

const LoginForm = () => (
    <section className="account-form">
        <section className="account-form__container">
            <h2 tabIndex="2">Login</h2>
            <form className="account-form__container--form">
                <input aria-label="Email" className="input" type="text" placeholder="Email"/>
                <input aria-label="Password" className="input" type="password" placeholder="Password"/>
                <button className="button" type="submit">Login</button>
                <div className="account-form__container--remember-forgot">
                    <label>
                        <input type="checkbox" id="cbxo1"/>
                        Remember me
                    </label>
                    <a href="#">Forgot your password?</a>
                </div>
            </form>
            <section className="account-form__container--social-login">
                <a href="#">
                    <div>
                        <img src={googleIcon} alt="Google"/>
                        Login with Google
                    </div>
                </a>
                <a href="#">
                    <div>
                        <img src={twitterIcon} alt="Twitter"/>
                        Login with Twitter
                    </div>
                </a>
            </section>
            <div className="account-form__container--register">
                <p>You do not have an account?</p>
                <Link to="/register">
                    Register for free
                </Link>
            </div>
        </section>
    </section>
);
 
export default LoginForm;