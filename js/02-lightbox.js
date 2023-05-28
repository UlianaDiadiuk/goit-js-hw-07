import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryArray = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryArray);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

gallery.addEventListener("click", onImageClick);

// Lightbox function
function lightBox(e) {
  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

  lightbox.on("show.simplelightbox", function () {});

  lightbox.on("error.simplelightbox", function (e) {
    console.log(e);
  });
}

// Click function
function onImageClick(e) {
  e.preventDefault();

  if (e.target.tagName !== "IMG") {
    return;
  }

  lightBox(e);
  getCaption(e);
}
