import React from 'react';
import SearchBarContainer from './search_bar_container';
import HomeNav from '../home_nav/home_nav_container';
import Logo from '../logo';

class SearchResult extends React.Component {
  render() {
    return (
      <div className="search_result">
        <div className="nav_left">
        </div>
        <div className="nav_center">
          <Logo/>
          <SearchBarContainer />
          <HomeNav props={this.props} />
        </div>
        <div className="nav_right">
        </div>
        <div className="con_center">
          {
            this.props.restaurants.map(r =>
              <div className="top_restaurant" key={r.id}>
                <div>{r.city}</div>
                <img src={r.photo} alt="photo" />
              </div>
            )
          }
        </div>
        <div className="con_left">
        </div>
        <div className="con_right">
        </div>
      </div >
    );
  }
}

export default SearchResult;


