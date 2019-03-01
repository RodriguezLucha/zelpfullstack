import React from 'react';
import {Link} from 'react-router-dom';

export const LoggedIn = ({currentUser, logout}) => (
  <div className='home_session_links'>
    <div className="dropdown">
      <div className="dropbtn">
        <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" alt="profile" />
        <button id="profile_button">
          <i id="caret-down" className="fas fa-caret-down"></i>
        </button>
      </div>
      <div className="dropdown_content">
        <div className='dropdown_top'>
          <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" alt="profile" />
          <strong id="drp_name">
            {currentUser.firstname}
          </strong>
        </div>
        <hr/>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>

    <div className='home_personal_greeting'>
      Hi, {currentUser.firstname}!
    </div>
    <button id="demo_button" onClick={logout}>Log Out</button>
  </div>
);

export default LoggedIn;
