'use strict';

export function searchImagesPixaby(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45109890-d15cee52eedc615dd4ac8bedf';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(console.log);
}