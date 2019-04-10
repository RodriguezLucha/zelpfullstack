const _ = require('lodash');
export const selectAllRestaurants = state => Object.values(state.entities.restaurants);

export const selectUserReview = (userId, singleRestaurant, reviews) => {
  if(!singleRestaurant) return;

  let reviewObjs = Object.values(reviews);
  let userReviews = reviewObjs.filter(review => review.userId === userId);
  let userReviewIds = userReviews.map(review => review.id);
  let restaurantReviewsIds = singleRestaurant.reviewIds;
  let result = _.intersection(userReviewIds, restaurantReviewsIds);
  if(result) {
    let reviewId = result[0];
    return reviews[reviewId];
  } else {
    return null;
  }
};