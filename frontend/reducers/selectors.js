export const selectAllRestaurants = state => Object.values(state.entities.restaurants);

export const selectUserReview = (userId, reviews) => {
  let reviewObjs = Object.values(reviews);
  let result = reviewObjs.filter(review => review.userId === userId);
  return result[0];
};