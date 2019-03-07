
import React from 'react';
import StarRatings from './star_ratings';


function ratingGroup({averageStars, totalReviews}) {
  return (
    <div className="rating_group">
      <div>
        <StarRatings starCount={averageStars} />
      </div>
      <div className="num_reviews">
        {totalReviews} reviews
      </div>
    </div>
  );
}

export default ratingGroup;
