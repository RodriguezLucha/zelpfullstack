import React from 'react';
import HomeNav from '../home_nav/home_nav_container';
import Logo from '../logo';
import {Link} from 'react-router-dom';
import StarRatings from './star_ratings';
import {Errors} from '../errors/errors';

const ratingToText = {
  null: 'Select your rating',
  1: 'Eek! Methinks not.',
  2: 'Meh. I\'ve experienced better.',
  3: 'A-OK.',
  4: 'Yay! I\'m a fan.',
  5: 'Woohoo! As good as it gets!'
};

class RestaurantReview extends React.Component {
  constructor(props) {
    super(props);
    let restaurantId = props.match.params.id;

    this.state = {
      starRating: null,
      hoverRating: null,
      reviewContent: '',
      restaurantId: restaurantId,
      loggedInUserReview: null,
      editingExistingReview: false
    };

    this.onStarClick = this.onStarClick.bind(this);
    this.onStarHover = this.onStarHover.bind(this);
    this.onStarLeave = this.onStarLeave.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateReviewContent = this.updateReviewContent.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleRestaurant(this.state.restaurantId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.loggedInUserReview !== prevProps.loggedInUserReview) {
      this.setState({loggedInUserReview: this.props.loggedInUserReview});
      this.setState({starRating: this.props.loggedInUserReview.numStars});
      this.setState({reviewContent: this.props.loggedInUserReview.content});
      this.setState({editingExistingReview: true});
    }
  }

  componentWillUnmount() {
    this.props.clearBackendErrors();
  }

  onStarHover(e) {
    let rating = e.currentTarget.id;
    this.setState({hoverRating: rating});
  }

  onStarLeave() {
    this.setState({hoverRating: null});
  }
  onStarClick(e) {
    let rating = e.currentTarget.id;
    this.setState({starRating: rating});
  }
  onSubmit() {
    if(!this.state.editingExistingReview){
      this.props.createReview({
        restaurant_id: this.state.restaurantId,
        content: this.state.reviewContent,
        num_stars: this.state.starRating
      }).then(() => this.props.history.push(`/restaurant/${this.state.restaurantId}`));
    } else{
      this.props.editReview(this.state.loggedInUserReview.id, {
        restaurant_id: this.state.restaurantId,
        content: this.state.reviewContent,
        num_stars: this.state.starRating
      }).then(() => this.props.history.push(`/restaurant/${this.state.restaurantId}`));
    }
  }

  updateReviewContent(e) {
    let content = e.currentTarget.value;
    this.setState({reviewContent: content});
  }

  getRating() {
    let starRating = this.state.starRating;
    let hoverRating = this.state.hoverRating;
    let rating = hoverRating === null ? starRating : hoverRating;
    return rating;
  }

  getPlaceHolderText() {
    let text
      = 'Your review helps others learn about great local businesses.'
      + '\n\n'
      + 'Please don\'t review this business if you received a freebie for writing this review, or if you\'re connected in any way to the owner or employees.';
    return text;
  }


  render() {
    const singleRestaurant = this.props.singleRestaurant;
    if (!singleRestaurant) return null;
    let rating = this.getRating();
    return (
      <div className="restaurant_create_review">
        <div className="nav_left">
        </div>
        <div className="nav_center">
          <Logo />
          <div className="write_a_review">
            Write a Review
          </div>
          <HomeNav props={this.props} />
        </div>
        <div className="nav_right">
        </div>
        <div className="rcr_con_center">

          <Errors errors={this.props.errors}
            clearErrors={this.props.clearBackendErrors}/>

          <div className="rr_title">
            <Link to={`/restaurant/${singleRestaurant.id}`} >{singleRestaurant.name}</Link>
          </div>
          <div className="rr_pseudo">
            <div className="rating_holder">
              <StarRatings starCount={rating}
                onMouseEnter={this.onStarHover}
                onMouseLeave={this.onStarLeave}
                onClick={this.onStarClick} />
              <div className="rating_text">{ratingToText[rating]}</div>
            </div>
            <textarea placeholder={`${this.getPlaceHolderText()}`}
              onChange={this.updateReviewContent}
              value={this.state.reviewContent}>
            </textarea>
          </div>
          <div className="rr_button">
            <button onClick={this.onSubmit}>Post Review</button>
          </div>
        </div>

        <div className="rcr_con_left">
        </div>
        <div className="rcr_con_right">
        </div>
      </div >
    );
  }
}

export default RestaurantReview;


