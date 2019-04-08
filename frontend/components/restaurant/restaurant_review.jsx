import React from 'react';
import HomeNav from '../home_nav/home_nav_container';
import Logo from '../logo';
import {Link} from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
import StarRatings from './star_ratings';
import RatingGroup from './rating_group';
import RestaurantMap from './restaurant_map';


class RestaurantReview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    //<Link to={`restaurant/${r.id}`}>{r.name}</Link>
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
          <div className="rr_title">
            <Link to='/what' >Black Angus Steakhouse</Link>
          </div>
          <div className="rr_pseudo">
            <fieldset className="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
              <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
              <input type="radio" id="star4" name="rating" value="4" /><label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
              <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
              <input type="radio" id="star3" name="rating" value="3" /><label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
              <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
              <input type="radio" id="star2" name="rating" value="2" /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
              <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
              <input type="radio" id="star1" name="rating" value="1" /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
              <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset>
            <div className="clearfix">
              <textarea placeholder="Your review helps others learn about great local businesses. Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."></textarea>
            </div>
          </div>

          <div className="rr_button">
            <button>Post Review</button>
          </div>
        </div>

        <div className="rcr_con_left">
        </div>
        <div className="rcr_con_right">
        </div>
      </div>
    );
  }
}

export default RestaurantReview;


