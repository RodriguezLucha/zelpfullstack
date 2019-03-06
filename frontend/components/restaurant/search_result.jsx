import React from 'react';
import SearchBarContainer from './search_bar_container';
import HomeNav from '../home_nav/home_nav_container';
import Logo from '../logo';
import {Link} from 'react-router-dom';

class SearchResult extends React.Component {
  componentDidMount() {
    //Debugging
    //this.props.fetchRestaurants();
  }

  render() {
    console.log(this.props.restaurants);
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
                <img src={r.photo} alt="photo" />
                <Link to={`restaurant/${r.id}`}>{r.name}</Link>
                <div>{r.address}</div>
                <div>{r.city}</div>
                <div>
                </div>
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


