

export const fetchAll = () => (
  $.ajax({
    method: 'GET',
    url: 'api/restaurants'
  })
);

export const searchAll = (style) => (
  $.ajax({
    method: 'GET',
    url: `api/restaurants/?style=${style}`,
    style
  })
);

export const fetchSingleRestaurant = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/restaurants/${id}`
  })
);
