import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <h1>
      <Link to="/">
        Zelp
        <i className="fas fa-wine-glass-alt"></i>
      </Link>
    </h1>
  </div>
);

export default Logo;
