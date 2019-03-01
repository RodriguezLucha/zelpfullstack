import React from 'react';
import LoggedOut from './logged_out';
import LoggedIn from './logged_in';

const HomeNav = (props) => {
  const loggedOut = () => (
    <LoggedOut props={props}/>
  );
  const loggedIn = () => (
    <LoggedIn props={props}/>
  );

  return props.currentUser ? loggedIn() : loggedOut();
};


export default HomeNav;
