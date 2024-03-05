import React from 'react';
import '/src/assets/css/signup.css'; 
import { Link } from 'react-router-dom';

function RegistrationForm() {
  return (
    <div className='full'>
    <form className="registration-form">
      <div className="form-group">
        <h1>Register</h1>
        <br></br>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <Link
       to='/login'>

      <button className="rr"type="submit">signup</button>
      </Link>
      <p className='l'>Already a member? <a href="/forgot-password">Login</a></p>
    </form>
    </div>
  );
}

export default RegistrationForm;