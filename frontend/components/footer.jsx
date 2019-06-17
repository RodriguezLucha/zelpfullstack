import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    let urlPath = this.props.location.pathname;
    if (urlPath.endsWith('review')) {
      return null;
    }
    return (
      <div className="footer">
        <img
          alt="footer_cityscape"
          src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/573fa19c8435/assets/img/structural/footer_cityscape.png" />
        <div className="my_links">
          <a
            className="github"
            href="https://github.com/RodriguezLucha/zelpfullstack"
            rel="noopener noreferrer"
            target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/rudy-rodriguez-11424020/"
            rel="noopener noreferrer"
            target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

    );
  }
}