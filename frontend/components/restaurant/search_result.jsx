import React from 'react';
import SearchBarContainer from './search_bar_container';

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <SearchBarContainer/>
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

export default SearchResult;


