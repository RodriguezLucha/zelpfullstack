import React from 'react';

function StarRatings({starCount}) {
  let stars = [];

  starCount = Math.floor(starCount);
  let color = starCount <= 3 ? 'yellow' : 'red';

  for (let i = 0; i < starCount; i++) {
    stars.push(<div key={i} className={`mystar fa fa-star checked ${color}`}></div>);
  }
  for (let i = starCount; i < 5; i++) {
    stars.push(<div key={i} className={`mystar fa fa-star ${color}`}></div>);
  }

  return (
    <div className="star_rating">
      {stars}
    </div>
  );
}

export default StarRatings;
