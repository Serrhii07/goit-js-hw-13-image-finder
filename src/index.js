import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateGalleryMarkup from './js/update-gallery-markup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  refs.imageGallery.innerHTML = '';
  form.reset();

  apiService.resetPage();

  refs.loadMoreBtn.classList.add('is-hidden');

  apiService.fetchImages().then(hits => {
    updateGalleryMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchImages().then(hits => {
    updateGalleryMarkup(hits);

    scrollPage();
  });
});

function scrollPage() {
  window.scrollBy({
    top: 500,
    behavior: 'smooth',
  });
}
