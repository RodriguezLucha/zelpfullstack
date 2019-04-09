import React from 'react';

function StarRatings(props) {
  let stars = [];

  let starCount = props.starCount ? props.starCount : 0;
  starCount = Math.floor(starCount);

  for (let i = 0; i < starCount; i++) {
    stars.push(<div id={i + 1}
      key={i}
      className={`mystar fa fa-star checked color_${starCount}`}
      onMouseEnter={props.onMouseEnter}
      onClick={props.onClick}></div>);
  }
  for (let i = starCount; i < 5; i++) {
    stars.push(<div id={i + 1}
      key={i}
      className={'mystar fa fa-star'}
      onMouseEnter={props.onMouseEnter}
      onClick={props.onClick}></div>);
  }

  return (
    <div className="star_selector"
      onMouseLeave={props.onMouseLeave}>
      {stars}
    </div>
  );
}

export default StarRatings;
