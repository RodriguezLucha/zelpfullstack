

export const fetchAll = () => (
  $.ajax({
    method: 'GET',
    url: 'api/restaurants'
  })
);

export const searchAll = (term) => (
  $.ajax({
    method: 'GET',
    url: `api/restaurants/?term=${term}`
  })
);

export const fetchSingleRestaurant = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/restaurants/${id}`
  })
);
