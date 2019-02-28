import React from 'react';

export const LoggedIn = ({currentUser, logout}) => (
  <div className='home_session_links'>
    <div className='home_personal_greeting'>
      Hi, {currentUser.firstname}!
    </div>
    <button id="demo_button" onClick={logout}>Log Out</button>
  </div>
);

export default LoggedIn;
