import{i as h}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="46051568-7c86afd7f3b7df8cfe693777e",y="https://pixabay.com/api/",g=o=>fetch(`${y}?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()}).then(r=>r.hits),L=o=>{const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=o.map(({webformatURL:e,largeImageURL:t,tags:n,likes:d,views:u,comments:f,downloads:m})=>`
        <div class="gallery-item">
            <a href="${t}">
                <img src="${e}" alt="${n}" />
            </a>
            <div class="image-info">
                <span>Likes: ${d}</span>
                <span>Views: ${u}</span>
                <span>Comments: ${f}</span>
                <span>Downloads: ${m}</span>
            </div>
        </div>
    `).join("");r.innerHTML=s,new SimpleLightbox(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()},a=document.querySelector(".search-form"),c=document.querySelector(".loader"),l=document.querySelector(".gallery");a.addEventListener("submit",o=>{o.preventDefault();const r=a.elements.query.value.trim();r&&(c.classList.remove("hidden"),l.classList.add("hidden"),g(r).then(s=>{L(s),l.classList.remove("hidden")}).catch(s=>{console.error(s),h.error({message:"Error fetching images."})}).finally(()=>{c.classList.add("hidden")}))});
//# sourceMappingURL=index.js.map
