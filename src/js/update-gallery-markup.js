import refs from './refs';
import cardTpl from '../templates/card.hbs';

function updateGalleryMarkup(hits) {
  const markup = cardTpl(hits);
  refs.imageGallery.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;
