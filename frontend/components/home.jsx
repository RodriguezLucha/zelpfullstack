import React from 'react';
import GreetingContainer from './greeting/greeting_container';

//<i class="fas fa-wine-glass-alt"></i>

const Home = () => (
  <div className="home_image">
    <div className="home">
      <GreetingContainer />
      <div className="home_banner">
        <h1>
          Zelp
        </h1>
      </div>
    </div>
  </div>

);

export default Home;
