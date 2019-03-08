import React from 'react';
import HomeNav from '../home_nav/home_nav_container';
import Logo from '../logo';
import SearchBarContainer from './search_bar_container';
import StarRatings from './star_ratings';
import RatingGroup from './rating_group';


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
            <Logo />
            <SearchBarContainer />
            <HomeNav props={this.props} />
          </div>
          <div className="right"></div>
          <div className="left"></div>
        </div>

        <div className="single_restaurant">
          <div className="info">
            <h1>{singleRestaurant.name}</h1>
            <RatingGroup totalReviews={singleRestaurant.totalReviews} averageStars={singleRestaurant.averageStars} />
            <div className="price">
              {singleRestaurant.priceRange}
              <span className="dot">•</span>
              {
                singleRestaurant.styles.map((style, index) => (
                  <span key={style}>
                    <button key={style} onClick={() => this.props.searchRestaurants(style).then(() => this.props.history.push('/search'))}>
                      {style}
                    </button>
                    {index !== singleRestaurant.styles.length - 1 ? ', ' : ''}
                  </span>
                ))
              }
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
              {
                singleRestaurant.reviewIds.map(reviewId => {
                  const review = this.props.reviews[reviewId];
                  const userId = review.userId;
                  const user = this.props.users[userId];

                  return (
                    <div key={reviewId} className="single_review">
                      <div className="rssr_user">
                        <img className="user_profile_pic" src={user.photo} alt="" />
                        <div className="user_firstname">
                          {user.firstname}
                        </div>
                      </div>
                      <div className="rssr_rating">
                        <StarRatings starCount={review.numStars} />
                      </div>
                      <div className="rssr_review">
                        {review.content}
                      </div>
                      <div className="rssr_feedback">
                      </div>
                    </div>
                  );
                })
              }
            </div>
            <div className="rssr_info_holder"></div>
          </div>
          <div className="left_reviews"></div>
          <div className="right_reviews"></div>
        </div>

      </div>
    );
  }
}

export default RestaurantShow;


