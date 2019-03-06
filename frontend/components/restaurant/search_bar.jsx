import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
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
    this.props.searchRestaurants(this.state.term).then(() => this.props.history.push('/search'));
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="search_bar">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text"
              value={this.state.term}
              onChange={this.update('term')}
              placeholder="Term"
            />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div >
    );
  }
}

export default SearchBar;


