import React from 'react';

export const LoggedIn = ({props}) => (
  <div className='home_session_links'>
    <div className="dropdown">
      <div className="dropbtn">
        <img
          alt="profile"
          src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" />
        <button id="profile_button">
          <i
            className="fas fa-caret-down"
            id="caret-down"></i>
        </button>
      </div>
      <div className="dropdown_content">
        <div className='dropdown_top'>
          <img
            alt="profile"
            src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png" />
          <div id="drp_name">
            {props.currentUser.firstname}
          </div>
        </div>
        <button onClick={props.logout}>Log Out</button>
      </div>
    </div>
  </div>
);

export default LoggedIn;
