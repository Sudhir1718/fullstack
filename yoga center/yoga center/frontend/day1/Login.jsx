
import React, { useState } from 'react';
import '/React/sudhir-react/src/assets/css/index.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailid, setEmailid] = useState('');
  const navigate =useNavigate()


 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your login logic, e.g., sending a request to your backend server
    console.log('Logging in with:', username, password);
    // Reset form fields
    setUsername('');
    setPassword('');
    Navigate('/login')
  };



  return (
    <div className='q'>
      <h2>Log ln</h2>
      <p>New to this site?<Link to='/register'>Sign Up</Link></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username </label>
          <input className='b'
            type="text"
            id="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label htmlFor="username">Emailid </label>
          <input className='s'
            type="text"
            id="username"
            value={emailid}
            onChange={(e)=>setEmailid(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label htmlFor="password">Password </label>
          <input className='b'
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div><br></br>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <Link to='/home'>
        <button className='qww' type="submit">Login</button>
        </Link>
        <p className='o'> Or Login with in</p>
        {/* <Link to='/register'>Sign Up</Link> */}
      </form>
    </div>
  );
};

export default LoginPage;
