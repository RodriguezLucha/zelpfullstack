import React from 'react';
import {Link} from 'react-router-dom';
import RatingGroup from './rating_group';
import RestaurantMapContainer from './restaurant_map_container';
import SearchNavContainer from '../common/search_nav/search_nav_container';

class SearchResult extends React.Component {
  render() {
    const searchRestaurants = this.props.searchRestaurants;
    const maxRevewLength = 500;
    return (
      <div>
        <SearchNavContainer props={this.props} />

        <div className="search_result">
          <div className="con_center">
            <div className="s_reviews">
              {
                this.props.restaurants.map(r =>
                  <div
                    className="search_single_restaurant"
                    key={r.id}>
                    <div className="ssr_picture" >
                      <img
                        alt="photo"
                        src={r.photo} />
                    </div>
                    <div className="ssr_info">
                      <Link to={`restaurant/${r.id}`}>{r.name}</Link>
                      <div>
                        <RatingGroup
                          averageStars={r.averageStars}
                          totalReviews={r.totalReviews} />

                        {r.priceRange}<span className="dot">•</span>
                        {
                          r.styles.map((style, index) => (
                            <button
                              key={style}
                              onClick={() => searchRestaurants(style)}>{style}{index !== r.styles.length - 1 ? ', ' : ''}</button>
                          ))
                        }
                      </div>
                    </div>
                    <div className="ssr_address">
                      <div>{r.address}</div>
                      <div>{r.city}</div>
                    </div>
                    <div className="ssr_reviews">
                      {r.review.content.length > maxRevewLength ? `${r.review.content.slice(0, maxRevewLength)}...` : r.review.content}
                    </div>
                  </div>
                )
              }
            </div>
            <div className="s_map">
              <div className="s_map_container">
                <RestaurantMapContainer />
              </div>
            </div>
          </div>
          <div className="con_left"/>
          <div className="con_right"/>
        </div>
      </div >
    );
  }
}

export default SearchResult;


