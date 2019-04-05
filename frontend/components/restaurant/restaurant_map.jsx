import React, {Component} from 'react';
import MarkerManager from '../../util/marker_manager';

export default class RestaurantMap extends Component {
  componentDidMount() {
    // this is SF
    let lat = 37.798002;
    let lng = -122.404282;
    if (this.props.restaurants.length) {
      lat = this.props.restaurants[0].lat;
      lng = this.props.restaurants[0].lng;
    }

    let zoom = 13;
    if (this.props.restaurants.length !== 0) {
      zoom = 16;
    }

    const mapOptions = {
      center: {lat: lat, lng: lng},
      zoom: zoom,
      draggable: true,
      disableDefaultUI: false,
      maxZoom: 16,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarketManager = new MarkerManager(this.map);
    this.MarketManager.updateMarkers(this.props.restaurants);
  }

  componentDidUpdate() {
    this.MarketManager.updateMarkers(this.props.restaurants);
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        Restaurant map.
      </div>
    );
  }
}