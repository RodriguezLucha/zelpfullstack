import {connect} from 'react-redux';
import {createReview, editReview} from '../../actions/review_actions';
import ResturantReview from './restaurant_review';

const mapStateToProps = (state) => {
  const reviews = state.entities.reviews;
  return ({reviews});
};

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  editReview: (reviewId, review) => dispatch(editReview(reviewId, review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantReview);
