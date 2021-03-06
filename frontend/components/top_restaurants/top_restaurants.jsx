import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RatingGroup from '../restaurant/rating_group';

export default class TopRestaurants extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div className="top_restaurants">
        <h1>Top Rated Restaurants</h1>
        <div className="top_restaurant_container">
          {
            this.props.restaurants.sort((a, b) => {
              const l = a.averageStars;
              const r = b.averageStars;
              return l < r ? 1 : l > r ? -1 : 0;
            }).slice(0, 3).map(r =>
              <div
                className="top_restaurant"
                key={r.id}>
                <img
                  alt="photo"
                  src={r.photo}/>
                <div className="details">
                  <Link to={`restaurant/${r.id}`}>{r.name}</Link>
                  <RatingGroup
                    averageStars={r.averageStars}
                    totalReviews={r.totalReviews} />
                  <div>
                    {
                      r.styles.map((style, index) => (
                        <span
                          className="style"
                          key={style}>{ style }{ index !== r.styles.length - 1 ? ', ' : ''}</span>
                      ))
                    }
                  </div>
                  <div className="city">{r.city}</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
