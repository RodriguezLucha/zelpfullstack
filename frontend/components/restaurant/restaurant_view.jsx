import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    let restaurantId = props.match.params.id;
    this.state = {restaurantId};
  }

  componentDidMount() {
    this.props.fetchSingleRestaurant(this.state.restaurantId);
  }

  render() {
    if (!this.props.singleRestaurant) return null;
    if (!this.props.singleRestaurant.photoUrl) return null;

    return (
      <div className="restaurant_view">
        <div className="form_header">
          <h1>
            <Link to="/">
              Zelp <i className="fas fa-wine-glass-alt"></i>
            </Link>
          </h1>
        </div>
        <h1>{this.props.singleRestaurant.name}</h1>
        <ul>
          <li>{this.props.singleRestaurant.address}</li>
          <li>{this.props.singleRestaurant.city}</li>
          <li>{this.props.singleRestaurant.state}</li>
        </ul>
        {this.props.singleRestaurant.photoUrl.map(url => (
          <img src={url} alt="" key={url}/>
        ))}
      </div>
    );
  }
}

export default RestaurantView;


