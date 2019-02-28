import React from 'react';
import LoggedOut from './logged_out';
import LoggedIn from './logged_in';

const HomeNav = ({currentUser, loginDemoUser, logout}) => {
  const loggedOut = () => (
    <LoggedOut loginDemoUser={loginDemoUser} />
  );
  const loggedIn = () => (
    <LoggedIn currentUser={currentUser} logout={logout}/>
  );

  return currentUser ? loggedIn() : loggedOut();
};


export default HomeNav;
