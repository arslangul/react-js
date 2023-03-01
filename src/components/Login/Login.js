import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Login.module.scss';

const Login = () => (
    <div className="login">
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );

// Login.propTypes = {};

// Login.defaultProps = {};

export default Login;
