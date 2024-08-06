'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const cardBox = document.querySelector('.card-container');
const loader = document.querySelector('.js-loader');
cardBox.addEventListener('click', event => event.preventDefault());

export function showLoader() {
  loader.style.display = 'inline-block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function renderSearcCard(data) {
  let addCards = ``;
  const createCardCode = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        addCards += `<li class="list-group-item"><div class="search-card">
   <div class="card-img-box">
     <a clas="card-link" href="${largeImageURL}"><img class="card-img" src="${webformatURL}" alt="${tags}"></a>
   </div>
   <div class="card-box-text">
     <p class="card-text">Likes<br><span>${likes}</span></p>
     <p class="card-text">Views<br><span>${views}</span></p>
     <p class="card-text">Comments<br><span>${comments}</span></p>
     <p class="card-text">Downloads<br><span>${downloads}</span></p>
   </div>
</div></li>`;
      }
    )
    .join('');

  cardBox.innerHTML = addCards;
  const gallery = new SimpleLightbox('.card-container a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.9,
  });
  gallery.refresh();
}