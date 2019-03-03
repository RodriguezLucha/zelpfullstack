

//Hit index of all restaurants
export const fetchAll = () => (
  $.ajax({
    method: 'GET',
    url: 'api/restaurants'
  })
);
