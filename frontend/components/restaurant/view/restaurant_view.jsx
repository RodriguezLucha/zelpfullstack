import React from 'react';
import {Link} from 'react-router-dom';
import HomeNav from '../../home_nav/home_nav_container';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    let restaurantId = props.match.params.id;
    this.state = {restaurantId};
  }

  componentDidMount() {
    this.props.fetchSingleRestaurant(this.state.restaurantId);
  }

  render() {
    if (!this.props.singleRestaurant) return null;
    if (!this.props.singleRestaurant.photoUrl) return null;

    const singleRestaurant = this.props.singleRestaurant;

    let address1 = `${singleRestaurant.address}`;
    let address2 = `${singleRestaurant.city},`;
    address2 += `  ${singleRestaurant.state}`;
    address2 += `  ${singleRestaurant.zip}`;

    return (
      <div className="restaurant_view">
        <div className="header">
          <div className="nav_content">
            <div className="logo">
              <h1>
                <Link to="/">
                  Zelp
                  <i className="fas fa-wine-glass-alt"></i>
                </Link>
              </h1>
            </div>
            <div className="search">

            </div>
            <div className="links">
              <HomeNav props={this.props} />
            </div>
          </div>
          <div className="right"></div>
          <div className="left"></div>
        </div>

        <div className="single_restaurant">
          <div className="info">
            <h1>{singleRestaurant.name}</h1>
            <div className="price">
              {singleRestaurant.priceRange}
            </div>
          </div>
          <div className="review">
            <button>
              <i className="fas fa-star"></i>
              &nbsp;
              Write a Review
            </button>
          </div>
          <div className="map">
            <address>
              {address1}
              <br />
              {address2}
            </address>
            <div>
              <a href={singleRestaurant.website}>{singleRestaurant.website}</a>
            </div>

          </div>
          <div className="images">
            {singleRestaurant.photoUrl.map(url => (
              <img src={url} alt="" key={url} />
            ))}
          </div>
          <div className="right"></div>
          <div className="left"></div>

          <div className="reviews">
            <h1>
              Reviews coming soon!
            </h1>
          </div>

        </div>

      </div>
    );
  }
}

export default RestaurantView;


