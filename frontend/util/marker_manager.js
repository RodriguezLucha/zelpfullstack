export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromRestaurant(restaurant) {
    const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      restaurantId: restaurant.id
    });
    this.markers[marker.restaurantId] = marker;
  }

  updateMarkers(restaurants) {
    const restaurantsObj = {};


    restaurants.forEach(restaurant => restaurantsObj[restaurant.id] = restaurant);

    restaurants
      .filter(restaurant => !this.markers[restaurant.id])
      .forEach(newRestaurant => this.createMarkerFromRestaurant(newRestaurant, this.handleClick));

    Object.keys(this.markers)
      .filter(restaurantId => !restaurantsObj[restaurantId])
      .forEach((restaurantId) => this.removeMarker(this.markers[restaurantId]));

    let bounds = new google.maps.LatLngBounds();
    const entries = Object.entries(this.markers);
    entries.forEach(e => {
      let marker = e[1];
      bounds.extend(marker.getPosition());
    });
    this.map.setCenter(bounds.getCenter());
    this.map.fitBounds(bounds);

    if (restaurants.length === 0) {
      let lat = 37.798002;
      let lng = -122.404282;
      const sf = new google.maps.LatLng(lat, lng);
      this.map.setCenter(sf);
    }
  }
  removeMarker(marker) {
    this.markers[marker.restaurantId].setMap(null);
    delete this.markers[marker.restaurantId];
  }
}