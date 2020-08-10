import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../redux/actions';

import googleIcon from '../assets/img/google-icon2.png';
import twitterIcon from '../assets/img/twitter-icon2.png';

import '../assets/styles/components/account-form.scss';

const LoginForm = ({ loginRequest, history }) => {

  const [form, setForm] = useState({
    email: '',
  });

  const handleInputValue = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest(form);
    history.push('/');
  };

  return (
    <section className='account-form'>
      <section className='account-form__container'>
        <h2>Login</h2>
        <form className='account-form__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            aria-label='Email'
            className='input'
            type='text'
            placeholder='Email'
            onChange={handleInputValue}
          />
          <input
            name='password'
            aria-label='Password'
            className='input'
            type='password'
            placeholder='Password'
            onChange={handleInputValue}
          />
          <button className='button' type='submit'>Login</button>
          <div className='account-form__container--remember-forgot'>
            <label htmlFor='cbxo1'>
              <input type='checkbox' id='cbxo1' />
              Remember me
            </label>
            <a href='/'>Forgot your password?</a>
          </div>
        </form>
        <section className='account-form__container--social-login'>
          <a href='/'>
            <div>
              <img src={googleIcon} alt='Google' />
              Login with Google
            </div>
          </a>
          <a href='/'>
            <div>
              <img src={twitterIcon} alt='Twitter' />
              Login with Twitter
            </div>
          </a>
        </section>
        <div className='account-form__container--register'>
          <p>You do not have an account?</p>
          <Link to='/register'>
            Register for free
          </Link>
        </div>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

// withRouter is needed to use history in a deeper level component.
export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
