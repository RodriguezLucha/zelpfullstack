import React, {Component} from 'react';
import Logo from '../../logo';
import SearchBarContainer from '../../restaurant/search_bar_container';
import HomeNav from '../../home_nav/home_nav';

export default class SearchNav extends Component {
  render(){
    let {currentUser, loginDemoUser, logout} = this.props;
    return (
      <div className="header">
        <div className="nav_center">
          <Logo />
          <SearchBarContainer />

          <HomeNav
            currentUser={currentUser}
            loginDemoUser={loginDemoUser}
            logout={logout} />
        </div>
        <div className="nav_right"/>
        <div className="nav_left"/>
      </div>
    );
  }
}
