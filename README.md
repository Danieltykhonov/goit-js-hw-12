# Homework 12 — Image Search with Pagination

An image search app built on the Pixabay API. A study project from the GoIT
Fullstack program: HTTP requests with Axios, `async/await`, pagination with a
"Load more" button, modular code structure and third-party libraries.

**Live page:**
[danieltykhonov.github.io/goit-js-hw-12](https://danieltykhonov.github.io/goit-js-hw-12/)

## Features

- Search images by keyword.
- 15 images per request, with more loaded by the **Load more** button.
- New images are added below the existing ones, and the page scrolls smoothly to
  them.
- When there are no more images to load, the button disappears and a
  notification appears.
- Every new search resets pagination to page 1 and clears previous results.
- Image cards with a preview and stats: likes, views, comments, downloads.
- Clicking a card opens the large image in a modal with a caption.
- A loading indicator is shown under the gallery while a request is in progress.
- Notifications when the search field is empty, nothing is found, or an error
  occurs.

## How it works

- **Modular structure.** The code is split into three files by responsibility
  and connected with `export` / `import`:
  - `pixabay-api.js` — the HTTP request to Pixabay;
  - `render-functions.js` — everything that changes the page: gallery, loader,
    Load more button, modal;
  - `main.js` — the app logic: form handling, pagination, checks and
    notifications.
- **HTTP requests.** `getImagesByQuery(query, page)` sends the `q`, `page`,
  `per_page`, `image_type`, `orientation` and `safesearch` parameters via Axios
  `params` and returns the response data.
- **Async/await.** All asynchronous code uses `async/await`. Errors are handled
  with `try...catch`, and `finally` hides the loader regardless of the result.
- **Pagination.** The current query and page are stored in variables. Each "Load
  more" click increases the page by 1. The end of the collection is detected by
  comparing loaded images (`page × per_page`) with `totalHits`.
- **Rendering.** Card markup is built from an array with `map()` and added to
  the DOM in a single operation.
- **Scrolling.** After loading more images, the page scrolls by two card heights
  using `getBoundingClientRect()` and `window.scrollBy()` with smooth behavior.
- **Modal.** SimpleLightbox is initialized once, and `refresh()` is called after
  new cards are added.

## Tech stack

- HTML5, CSS3
- JavaScript (ES6+, modules, async/await)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [SimpleLightbox](https://simplelightbox.com/)
- [iziToast](https://izitoast.marcelodolza.com/)
- [Pixabay API](https://pixabay.com/api/docs/)
- GitHub Actions + GitHub Pages for deployment

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Roadmap

### Done

- [x] Image search by keyword with the Pixabay API
- [x] Gallery with SimpleLightbox modal
- [x] Loader and notifications
- [x] Refactoring from Promises to `async/await`
- [x] Pagination with a "Load more" button
- [x] End-of-collection handling
- [x] Smooth scroll after loading more images
- [x] Deployment to GitHub Pages via GitHub Actions

### Planned

- [ ] Infinite scroll with `IntersectionObserver` as an alternative to the
      button
- [ ] Skeleton placeholders instead of a single loader
- [ ] Save the search query in the URL so results can be shared
- [ ] Search filters: image type, orientation, color
- [ ] Favorites saved in `localStorage`
- [ ] Better accessibility: keyboard navigation and ARIA attributes
- [ ] Dark / light theme toggle
- [ ] Rewrite in React + TypeScript
