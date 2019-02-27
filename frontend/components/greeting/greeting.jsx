import {Link} from 'react-router-dom';
import React from 'react';

const Greeting = ({currentUser, logout, loginDemoUser}) => {
  const sessionLinks = () => (
    <nav className="home_session_links">
      <Link to="/login">Login</Link>
      <br></br>
      <Link id="signup_button" to="/signup">Sign up!</Link>
      <button id="demo_button" onClick={loginDemoUser}>Demo User</button>
    </nav>
  );
  const personalGreeting = () => (
    <div className='home_session_links'>
      <div className='home_personal_greeting'>
        Hi, {currentUser.firstname}!
      </div>
      <button id="demo_button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
