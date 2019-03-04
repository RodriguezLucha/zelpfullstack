

//Hit index of all restaurants
export const fetchAll = () => (
  $.ajax({
    method: 'GET',
    url: 'api/restaurants'
  })
);

export const fetchSingleRestaurant = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/restaurants/${id}`
  })
);
