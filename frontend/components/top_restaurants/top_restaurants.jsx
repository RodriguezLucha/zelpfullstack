import React, {Component} from 'react';

export default class TopRestaurants extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div className="top_restaurants">
        <h1>Top Restaurants Coming Soon!</h1>
      </div>
    );
  }
}
