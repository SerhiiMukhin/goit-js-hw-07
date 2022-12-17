import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', markup);

galleryContainer.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalImage = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
  <img src="${originalImage}" width="800" height="600">
`)

instance.show()

});

