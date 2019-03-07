import React from 'react';

function StarRatings({starCount}) {
  let stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(<div className="mystar fa fa-star checked"></div>);
  }
  for (let i = starCount; i < 5; i++) {
    stars.push(<div className="mystar fa fa-star"></div>);
  }

  return (
    <div className="star_rating">
      {stars}
    </div>
  );
}

export default StarRatings;
