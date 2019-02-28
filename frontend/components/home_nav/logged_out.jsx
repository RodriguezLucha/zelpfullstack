import React from 'react';
import {Link} from 'react-router-dom';

export const LoggedOut = ({loginDemoUser}) => (
  <div className="home_session_links">
    <Link id="login_button" to="/login">Login</Link>
    <br></br>
    <Link id="signup_button" to="/signup">Sign up!</Link>
    <button id="demo_button" onClick={loginDemoUser}>Demo User</button>
  </div>
);

export default LoggedOut;
