import React from 'react';
import {Link} from 'react-router-dom';

import '../assets/styles/components/account-form.scss';

const RegisterForm = () => (
    <section className="account-form">
        <section className="account-form__container" style={{minHeight: 500}}>
            <h2 tabIndex="2">Register</h2>
            <form className="account-form__container--form">
                <input aria-label="Name" className="input" type="text" placeholder="Name"/>
                <input aria-label="Email" className="input" type="text" placeholder="Email"/>
                <input aria-label="Password" className="input" type="password" placeholder="Password"/>
                <button className="button" type="submit">Register</button>
            </form>
            <div className="account-form__container--register">
                <p>Do you already have an account?</p>
                <Link to="/login">
                    Go to login
                </Link>
            </div>
        </section>
    </section>
);
 
export default RegisterForm;