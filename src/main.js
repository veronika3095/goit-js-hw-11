import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader'); 
const gallery = document.querySelector('.gallery'); // Ваш контейнер для картинок

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = searchForm.elements.query.value.trim();
    if (!query) {
        return; 
    }

    loader.classList.remove('hidden'); 
    gallery.classList.add('hidden'); // Сховати галерею під час завантаження

    fetchImages(query)
        .then(images => {
            renderGallery(images);
            gallery.classList.remove('hidden'); // Показати галерею після рендерингу
        })
        .catch(error => {
            console.error(error);
            iziToast.error({ message: "Error fetching images." });
        })
        .finally(() => {
            loader.classList.add('hidden'); 
        });
});