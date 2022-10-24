import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

function createGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
       <div class ="gallery__item"> 
       <a href=${original} class="gallery__link">
       <img src=${preview} alt=${description} data-source=${original} class="gallery__image" />
       </a>
       </div>`;
    }).join("");
};


const mackUpGallery = createGallery(galleryItems) ;
gallery.insertAdjacentHTML("afterbegin", mackUpGallery);


const open = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains(`gallery__image`)) {
      return;
    }
    const bace = basicLightbox.create(` <img src=${e.target.dataset.source} width=100% height=100% />  `);
    bace.show();
    
};

gallery.addEventListener('click', open);
