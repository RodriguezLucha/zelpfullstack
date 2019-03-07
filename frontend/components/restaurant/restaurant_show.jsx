import React from 'react';
import HomeNav from '../home_nav/home_nav_container';
import SearchBarContainer from './search_bar_container';
import Logo from '../logo';

class RestaurantShow extends React.Component {
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
      <div className="restaurant_show">
        <div className="header">
          <div className="nav_center">
            <Logo/>
            <SearchBarContainer />
            <HomeNav props={this.props} />
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
            <div className="rssr_review_holder">
              <div className="single_review">
                <div className="rssr_user">
                    User1
                </div>
                <div className="rssr_rating">
                    Rating1
                </div>
                <div className="rssr_review">
                    Review1
                </div>
                <div className="rssr_feedback">
                    Feedback1
                </div>
              </div>
              <div className="single_review">
                <div className="rssr_user">
                    User2
                </div>
                <div className="rssr_rating">
                    Rating
                </div>
                <div className="rssr_review">
                    Review
                </div>
                <div className="rssr_feedback">
                    Feedback
                </div>
              </div>
            </div>
            <div className="rssr_info_holder"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default RestaurantShow;


