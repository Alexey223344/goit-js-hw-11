'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImagesPixaby } from './js/pixabay-api.js';
import {
  renderSearcCard,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.js-form-container');
searchForm.addEventListener('submit', hendleSearch);

function hendleSearch(event) {
  event.preventDefault();
  showLoader();
  const form = event.currentTarget;
  const inputValue = form.elements.search.value.toLowerCase().trim();

  if (!inputValue) {
    iziToast.error({
      message: `Please enter the data in the input field`,
      position: 'topRight',
      messageColor: '#ffffff',
      backgroundColor: '#EF4040',
    });
    hideLoader();
    return;
  }

  searchImagesPixaby(inputValue)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          message: `Sorry, there are no images matching<br>your search query. Please try again!`,
          position: 'topRight',
          messageColor: '#ffffff',
          backgroundColor: '#EF4040',
        });
      }
      return data;
    })
    .then(data => {
      renderSearcCard(data.hits);
    })
    .catch(console.log)
    .finally(() => {
      hideLoader();
      form.reset();
    });
}