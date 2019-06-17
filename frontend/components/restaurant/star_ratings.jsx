import React from 'react';

function StarRatings(props) {
  let stars = [];

  let starCount = props.starCount ? props.starCount : 0;
  starCount = Math.floor(starCount);

  for (let i = 0; i < starCount; i++) {
    stars.push(<div
      className={`mystar fa fa-star checked color_${starCount}`}
      id={i + 1}
      key={i}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}></div>);
  }
  for (let i = starCount; i < 5; i++) {
    stars.push(<div
      className={'mystar fa fa-star'}
      id={i + 1}
      key={i}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}></div>);
  }

  return (
    <div
      className="star_selector"
      onMouseLeave={props.onMouseLeave}>
      {stars}
    </div>
  );
}

export default StarRatings;
