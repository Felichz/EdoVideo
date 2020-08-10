import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerRequest } from '../redux/actions';

import '../assets/styles/components/account-form.scss';

const RegisterForm = ({ registerRequest, history }) => {

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
    registerRequest(form);
    history.push('/');
  };

  return (
    <section className='account-form'>
      <section className='account-form__container' style={{ minHeight: 500 }}>
        <h2>Register</h2>
        <form className='account-form__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            aria-label='Name'
            className='input'
            type='text'
            placeholder='Name'
            onChange={handleInputValue}
          />
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
          <button className='button' type='submit'>Register</button>
        </form>
        <div className='account-form__container--register'>
          <p>Do you already have an account?</p>
          <Link to='/login'>
            Go to login
          </Link>
        </div>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));
