export const renderGallery = (images) => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    if (images.length === 0) {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
    }

    

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="gallery-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="image-info">
                <span>Likes: ${likes}</span>
                <span>Views: ${views}</span>
                <span>Comments: ${comments}</span>
                <span>Downloads: ${downloads}</span>
            </div>
        </div>
    `).join('');

    gallery.innerHTML = markup;

    const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt', 
    });
    
    lightbox.refresh();
};