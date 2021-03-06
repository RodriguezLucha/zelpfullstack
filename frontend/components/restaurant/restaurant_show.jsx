import React from 'react';

import SingleReview from './single_review';
import RatingGroup from './rating_group';
import RestaurantMap from './restaurant_map';
import SearchNavContainer from '../common/search_nav/search_nav_container';
import {Link} from 'react-router-dom';


class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    let restaurantId = props.match.params.id;
    this.state = {
      restaurantId: restaurantId,
      alreadyReviewed: false
    };
  }

  componentDidMount() {
    this.props.fetchSingleRestaurant(this.state.restaurantId);
  }

  componentDidUpdate(){
    const singleRestaurant = this.props.singleRestaurant;
    if(!singleRestaurant || !singleRestaurant.reviewIds) return;
    let numOtherUserReviews = 0;

    for(let i = 0; i < singleRestaurant.reviewIds.length; i++){
      let reviewId = singleRestaurant.reviewIds[i];
      const review = this.props.reviews[reviewId];
      const userId = review.userId;
      const currentUserReview = userId === this.props.loggedInUserId;

      if(currentUserReview && !this.state.alreadyReviewed){
        this.setState({alreadyReviewed: true});
      }
      if(!currentUserReview){
        numOtherUserReviews++;
      }
    }

    if(numOtherUserReviews === singleRestaurant.reviewIds.length && this.state.alreadyReviewed){
      this.setState({alreadyReviewed: false});
    }
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
        <SearchNavContainer/>
        <div className="single_restaurant">
          <div className="info">
            <h1>{singleRestaurant.name}</h1>
            <RatingGroup
              averageStars={singleRestaurant.averageStars}
              totalReviews={singleRestaurant.totalReviews} />
            <div className="price">
              {singleRestaurant.priceRange}
              <span className="dot">•</span>
              {
                singleRestaurant.styles.map((style, index) => (
                  <span key={style}>
                    <button
                      key={style}
                      onClick={() => this.props.searchRestaurants(style).then(() => this.props.history.push('/search'))}>
                      {style}
                    </button>
                    {index !== singleRestaurant.styles.length - 1 ? ', ' : ''}
                  </span>
                ))
              }
            </div>
          </div>
          <div className="review">
            <Link to={`/restaurant/${singleRestaurant.id}/review`}>
              <i className="fas fa-star"></i>
              &nbsp;
              {this.state.alreadyReviewed ? 'Update your review' : 'Write a Review'}
            </Link>
          </div>
          <div className="map">
            <RestaurantMap restaurants={[singleRestaurant]} />
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
              <img
                alt=""
                key={url}
                src={url} />
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
                  const currentUserReview = userId === this.props.loggedInUserId;
                  const deleteReview = this.props.deleteReview;


                  return (<SingleReview
                    currentUserReview={currentUserReview}
                    deleteReview={deleteReview}
                    key={reviewId}
                    review={review}
                    reviewId={reviewId}
                    user={user}
                    userId={userId} />);
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


