import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class TopRestaurants extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div className="top_restaurants">
        <h1>Top Restaurants</h1>
        <div className="top_restaurant_container">
          {
            this.props.restaurants.map(r =>
              <div className="top_restaurant" key={r.id}>
                <Link to={`restaurant/${r.id}`}>{r.name}</Link>
                <div>{r.address}</div>
                <div>{r.city}</div>
                <img src={r.photo} alt="photo"/>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
