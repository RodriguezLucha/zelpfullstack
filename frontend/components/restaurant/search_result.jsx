import React from 'react';
import SearchBarContainer from './search_bar_container';
import HomeNav from '../home_nav/home_nav_container';
import Logo from '../logo';
import {Link} from 'react-router-dom';
import StarRatings from './star_ratings';

class SearchResult extends React.Component {
  componentDidMount() {
    //Debugging
    this.props.fetchRestaurants();
  }

  render() {
    const searchRestaurants = this.props.searchRestaurants;
    return (
      <div className="search_result">
        <div className="nav_left">
        </div>
        <div className="nav_center">
          <Logo />
          <SearchBarContainer />
          <HomeNav props={this.props} />
        </div>
        <div className="nav_right">
        </div>
        <div className="con_center">
          <div className="s_reviews">
            {
              this.props.restaurants.map(r =>
                <div className="search_single_restaurant" key={r.id}>
                  <div className="ssr_picture" >
                    <img src={r.photo} alt="photo" />
                  </div>
                  <div className="ssr_info">
                    <Link to={`restaurant/${r.id}`}>{r.name}</Link>
                    <div>
                      <div className="rating_group">
                        <div>
                          <StarRatings starCount={r.averageStars}/>
                        </div>
                        <div className="num_reviews">
                          {r.totalReviews} reviews
                        </div>
                      </div>

                      {r.priceRange}<span className="dot">•</span>
                      {
                        r.styles.map((style, index) => (
                          <button key={style} onClick={() => searchRestaurants(style)}>{style}{index !== r.styles.length - 1 ? ',' : ''}</button>
                        ))
                      }
                    </div>
                  </div>
                  <div className="ssr_address">
                    <div>{r.address}</div>
                    <div>{r.city}</div>
                  </div>
                  <div className="ssr_reviews">
                    {r.review.content}
                  </div>
                </div>
              )
            }
          </div>
          <div className="s_map"></div>
        </div>
        <div className="con_left">
        </div>
        <div className="con_right">
        </div>
      </div >
    );
  }
}

export default SearchResult;


