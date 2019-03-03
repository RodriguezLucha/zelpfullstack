import React from 'react';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: props.match.params.id
    };
  }

  render() {
    return (
      <div>
        Single Restaurant View
        {this.state.restaurantId}
      </div>
    );
  }
}

export default RestaurantView;


