import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', markup);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"/>
      </a>
      </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

