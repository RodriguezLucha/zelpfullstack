import React from 'react';
import HomeNav from '../home_nav/home_nav_container';
import Logo from '../logo';
import {Link} from 'react-router-dom';
import StarSelector from './star_selector';


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
            <StarSelector></StarSelector>
            <textarea placeholder="Your review helps others learn about great local businesses. Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."></textarea>
          </div>
          <div className="rr_button">
            <button>Post Review</button>
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


