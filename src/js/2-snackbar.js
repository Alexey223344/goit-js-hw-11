'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// const inputUserValue = document.querySelector('.js-form');
// inputUserValue.addEventListener('submit', handleUserSabmit);

function createPromise(delay, shouldFulfill) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFulfill) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = parseInt(event.target.delay.value);
  const shouldFulfill = event.target.state.value === 'fulfilled';

  createPromise(delay, shouldFulfill)
    .then((message) => {
      iziToast.success({ message });
    })
    .catch((message) => {
      iziToast.error({ message });
    });
});
