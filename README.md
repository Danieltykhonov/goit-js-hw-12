# Homework 11 — Image Search

An image search app built on the Pixabay API. A study project from the GoIT
Fullstack program: HTTP requests with Axios, modular code structure, Promises
and third-party libraries.

**Live page:**
[danieltykhonov.github.io/goit-js-hw-11](https://danieltykhonov.github.io/goit-js-hw-11/)

## Features

- Search images by keyword.
- Image cards with a preview and stats: likes, views, comments, downloads.
- Clicking a card opens the large image in a modal with a caption.
- A loading indicator is shown while the request is in progress.
- Notifications when the search field is empty, nothing is found, or an error
  occurs.
- Previous results are cleared before every new search.

## How it works

- **Modular structure.** The code is split into three files by responsibility
  and connected with `export` / `import`:
  - `pixabay-api.js` — the HTTP request to Pixabay;
  - `render-functions.js` — everything that changes the page: gallery, loader,
    modal;
  - `main.js` — the app logic: form handling, checks and notifications.
- **HTTP requests.** Axios with the `q`, `image_type`, `orientation` and
  `safesearch` parameters passed via `params`. The function returns a Promise
  with the response data.
- **Handling the result.** A `then` / `catch` / `finally` chain: `then` checks
  whether any images were found, `catch` handles errors, and `finally` hides the
  loader regardless of the result.
- **Rendering.** Card markup is built from an array with `map()` and added to
  the DOM in a single operation.
- **Modal.** SimpleLightbox is initialized once, and `refresh()` is called after
  new cards are added.

## Tech stack

- HTML5, CSS3
- JavaScript (ES6+, modules, Promises)
- Vite
- [Axios](https://axios-http.com/)
- [SimpleLightbox](https://simplelightbox.com/)
- [iziToast](https://izitoast.marcelodolza.com/)
- [CSS Loaders](https://cssloaders.github.io/)
- [Pixabay API](https://pixabay.com/api/docs/)

## Project structure

```
src/
├── css/
│   └── styles.css
├── js/
│   ├── pixabay-api.js
│   └── render-functions.js
├── index.html
└── main.js
```

## Getting started

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`).

Production build:

```bash
npm run build
```

## Author

Danylo Tykhonov — [GitHub](https://github.com/Danieltykhonov) ·
[LinkedIn](https://www.linkedin.com/in/danylo-tykhonov-b85a0b166/)
