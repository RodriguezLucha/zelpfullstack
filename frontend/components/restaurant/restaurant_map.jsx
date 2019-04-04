import React, {Component} from 'react';
import MarkerManager from '../../util/marker_manager';

export default class RestaurantMap extends Component {
  componentDidMount() {
    // this is SF
    let lat = this.props.restaurant.lat;
    let lng = this.props.restaurant.lng;

    const mapOptions = {
      center: {lat: lat, lng: lng},
      zoom: 16
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarketManager = new MarkerManager(this.map);
    this.MarketManager.updateMarkers([this.props.restaurant]);
  }

  componentDidUpdate() {
    this.MarketManager.updateMarkers([this.props.restaurant]);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        Restaurant map.
      </div>
    );
  }
}