

import React, {Component} from 'react';
import StarRatings from './star_ratings';

export default class SingleReview extends Component {
  getTrashIcon() {
    return (
      <svg id="18x18_trash"
        height="18"
        viewBox="0 0 18 18"
        width="18">
        <path d="M3 5V3h4V2h4v1h4v2H3zm11 9c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6h10v8zM8 8.5a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-5zm3 0a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5v-5z"></path>
      </svg>
    );
  }

  render() {
    const review = this.props.review;
    const user = this.props.user;
    const currentUserReview = this.props.currentUserReview;
    const reviewId = this.props.reviewId;
    const deleteReview = this.props.deleteReview;

    const dateObj = new Date(review.updatedAt);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    const dataString = `${month}/${day}/${year}`;

    return (
      <div key={reviewId}
        className="single_review">
        <div className="rssr_user">
          <img className="user_profile_pic"
            src={user.photo}
            alt="" />
          <div className="user_firstname">
            {user.firstname}
          </div>
        </div>
        <div className="rssr_rating">
          <StarRatings starCount={review.numStars} />
          <div className="rssr_date">
            {dataString}
          </div>
        </div>
        <div className="rssr_review">
          {review.content}
        </div>
        <div className="rssr_feedback">
        </div>
        <div className="rssr_buttons">
          {currentUserReview ? <button className="trash_button"
            onClick={() => deleteReview(reviewId)}>{this.getTrashIcon()}</button> : ''}
        </div>
      </div>
    );
  }
}