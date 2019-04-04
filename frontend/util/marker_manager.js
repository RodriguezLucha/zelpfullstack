export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromRestaurant(restaurant) {
    console.log('restaurant', restaurant);
    const position = new google.maps.LatLng(restaurant.lat, restaurant.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      restaurantId: restaurant.id
    });
    this.markers[marker.restaurantId] = marker;
  }

  updateMarkers(restaurants) {
    restaurants.forEach(restaurant => {
      console.log(restaurant);
      let restaurantId = restaurant.id;
      if (!(restaurantId in this.markers)) {
        let newMarker = this.createMarkerFromRestaurant(restaurant);
        this.markers[restaurantId] = newMarker;
      }
    });
  }
}