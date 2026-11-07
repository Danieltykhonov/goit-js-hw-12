import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;

function showMessage(text) {
  iziToast.error({
    message: text,
    position: 'topRight',
  });
}

function showInfo(text) {
  iziToast.info({
    message: text,
    position: 'topRight',
  });
}

function handleEndOfCollection(totalHits) {
  if (currentPage * PER_PAGE >= totalHits) {
    hideLoadMoreButton();
    showInfo("We're sorry, but you've reached the end of search results.");
  } else {
    showLoadMoreButton();
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (query === '') {
    showMessage('Please enter a search query!');
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    createGallery(data.hits);
    handleEndOfCollection(data.totalHits);
  } catch (error) {
    showMessage('Something went wrong. Please try again later.');
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);
    scrollToNewImages();
    handleEndOfCollection(data.totalHits);
  } catch (error) {
    showMessage('Something went wrong. Please try again later.');
  } finally {
    hideLoader();
  }
});

const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});

////!
function scrollToNewImages() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
