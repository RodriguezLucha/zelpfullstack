import React from 'react';
import HomeNav from './home_nav/home_nav_container';
import SearchBarContainer from './restaurant/search_bar_container';

const Home = ({props}) => (
  <div className="home">
    <div className="nav_container_outer">
      <div className="nav_container_inner">
        <HomeNav props={props}/>
      </div>
    </div>
    <div className="home_banner">
      <h1>Zelp</h1>
      <SearchBarContainer/>
    </div>
  </div>
);

export default Home;
