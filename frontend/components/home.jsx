import React from 'react';
import HomeNav from './home_nav/home_nav_container';

//<i class="fas fa-wine-glass-alt"></i>

const Home = ({props}) => (
  <div className="home">
    <HomeNav props={props}/>
    <div className="home_banner">
      <h1>Zelp</h1>
    </div>
  </div>

);

export default Home;
