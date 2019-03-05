import React from 'react';

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //searchRestaurants
    this.props.searchRestaurants(this.state.category);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Search
            <input type="text"
              value={this.state.category}
              onChange={this.update('category')}
              placeholder="Category"
            />
          </label>
          <input type="submit" value="Search" />
        </form>

        <div>
          {
            this.props.restaurants.map(r =>
              <div className="top_restaurant" key={r.id}>
                <div>{r.city}</div>
                <img src={r.photo} alt="photo" />
              </div>
            )
          }
        </div>
      </div >
    );
  }
}

export default RestaurantSearch;


