import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader'); 

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchForm.elements.query.value.trim();
    if (!query) {
        return; 
    }

    loader.classList.remove('hidden'); 

    try {
        const images = await fetchImages(query);
        renderGallery(images);
    } catch (error) {
        console.error(error);
        iziToast.error({ message: "Error fetching images." });
    } finally {
        loader.classList.add('hidden'); 
    }
});