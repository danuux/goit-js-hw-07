import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";


const gallery = document.querySelector('ul.gallery');
const fragment = new DocumentFragment();

galleryItems.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = item.original;

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.alt = item.description;

  a.appendChild(img);
  li.appendChild(a);

  
  fragment.appendChild(li);
});

gallery.appendChild(fragment);


new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});