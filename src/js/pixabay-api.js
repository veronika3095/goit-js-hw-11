const API_KEY = '46051568-7c86afd7f3b7df8cfe693777e'; 
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query) => {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    if (!response.ok) {
        throw new Error('Error fetching images');
    }
    const data = await response.json();
    return data.hits;
};