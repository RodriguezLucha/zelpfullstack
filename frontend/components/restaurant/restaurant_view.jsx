import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from '../home_nav/home_nav_container';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    let restaurantId = props.match.params.id;
    this.state = { restaurantId };
  }

  componentDidMount() {
    this.props.fetchSingleRestaurant(this.state.restaurantId);
  }

  render() {
    if (!this.props.singleRestaurant) return null;
    if (!this.props.singleRestaurant.photoUrl) return null;

    let address = `${this.props.singleRestaurant.address}`;
    address += ` ${this.props.singleRestaurant.city}`;
    address += `  ${this.props.singleRestaurant.state}`;
    return (
      <div className="restaurant_view">
        <div className="form_header">

          <div className="nav_container_outer">
            <h1>
              <Link to="/">
                Zelp <i className="fas fa-wine-glass-alt"></i>
              </Link>
            </h1>
            <div className="nav_container_inner">
              <HomeNav props={this.props} />
            </div>
          </div>
        </div>
        <div className="single_restaurant">
          <div className="info">
            <h1>{this.props.singleRestaurant.name}</h1>
            <address>
              {address}
            </address>
          </div>
          <div className="review">
            <h1>Write a Review</h1>
          </div>
          <div className="map">
            <div>Map</div>
          </div>
          <div className="images">
              {this.props.singleRestaurant.photoUrl.map(url => (
              <img src={url} alt="" key={url} />
            ))}
          </div>

          <div className="right"></div>
          <div className="left"></div>

        </div>

      </div>
    );
  }
}

export default RestaurantView;


