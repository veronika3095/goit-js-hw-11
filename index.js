import{i as m}from"./assets/vendor-17o45ynk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="46051568-7c86afd7f3b7df8cfe693777e",y="https://pixabay.com/api/",h=async s=>{const t=await fetch(`${y}?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Error fetching images");return(await t.json()).hits},g=s=>{const t=document.querySelector(".gallery");if(t.innerHTML="",s.length===0){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=s.map(({webformatURL:e,largeImageURL:r,tags:n,likes:l,views:d,comments:f,downloads:u})=>`
        <div class="gallery-item">
            <a href="${r}">
                <img src="${e}" alt="${n}" />
            </a>
            <div class="image-info">
                <span>Likes: ${l}</span>
                <span>Views: ${d}</span>
                <span>Comments: ${f}</span>
                <span>Downloads: ${u}</span>
            </div>
        </div>
    `).join("");t.innerHTML=o,new SimpleLightbox(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()},i=document.querySelector(".search-form"),c=document.querySelector(".loader");i.addEventListener("submit",async s=>{s.preventDefault();const t=i.elements.query.value.trim();if(t){c.classList.remove("hidden");try{const o=await h(t);g(o)}catch(o){console.error(o),m.error({message:"Error fetching images."})}finally{c.classList.add("hidden")}}});
//# sourceMappingURL=index.js.map
