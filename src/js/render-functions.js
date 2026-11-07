import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'pure-css-loader/dist/css-loader.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.add('is-active');
}

export function hideLoader() {
  loader.classList.remove('is-active');
}

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="info">
          <li class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${likes}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${views}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${comments}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

//////!
const loadMoreBtn = document.querySelector('.load-more');

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
