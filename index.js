import{S as p,i as g}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="46051568-7c86afd7f3b7df8cfe693777e",L="https://pixabay.com/api/",S=n=>{const t=new URL(L),o=new URLSearchParams({key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return t.search=o.toString(),fetch(t).then(s=>{if(!s.ok)throw new Error("Error fetching images");return s.json()}).then(s=>s.hits)},b=n=>{const t=document.querySelector(".gallery");if(t.innerHTML="",n.length===0){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=n.map(({webformatURL:e,largeImageURL:r,tags:i,likes:u,views:f,comments:m,downloads:h})=>`
        <div class="gallery-item">
            <a href="${r}">
                <img src="${e}" alt="${i}" />
            </a>
            <div class="image-info">
                <span>Likes: ${u}</span>
                <span>Views: ${f}</span>
                <span>Comments: ${m}</span>
                <span>Downloads: ${h}</span>
            </div>
        </div>
    `).join("");t.innerHTML=o,new SimpleLightbox(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()},c=document.querySelector(".search-form"),l=document.querySelector(".loader"),d=document.querySelector(".gallery");let a;c.addEventListener("submit",n=>{n.preventDefault();const t=c.elements.query.value.trim();t&&(l.classList.remove("hidden"),d.classList.add("hidden"),S(t).then(o=>{b(o),d.classList.remove("hidden"),a&&a.destroy(),a=new p(".gallery a",{})}).catch(o=>{console.error(o),g.error({message:"Error fetching images."})}).finally(()=>{l.classList.add("hidden")}))});
//# sourceMappingURL=index.js.map
