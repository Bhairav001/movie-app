// SignUpForm.js

import React from 'react';
import './style.scss';

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm your password"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
