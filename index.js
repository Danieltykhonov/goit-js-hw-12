import{a as q,S as E,i as d}from"./assets/vendor-Cjy04WP9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const B="58346314-fef5aebf609ba6e46751a0ff8",M="https://pixabay.com/api/",m=15;async function p(e,r){return(await q.get(M,{params:{key:B,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:m}})).data}const y=document.querySelector(".gallery"),$=new E(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".loader");function g(){h.classList.add("is-active")}function L(){h.classList.remove("is-active")}function w(e){const r=e.map(({webformatURL:s,largeImageURL:n,tags:t,likes:o,views:a,comments:S,downloads:P})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${s}" alt="${t}" />
        </a>
        <ul class="info">
          <li class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${o}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${a}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${S}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${P}</p>
          </li>
        </ul>
      </li>`).join("");y.insertAdjacentHTML("beforeend",r),$.refresh()}function O(){y.innerHTML=""}const b=document.querySelector(".load-more");function x(){b.classList.remove("is-hidden")}function u(){b.classList.add("is-hidden")}const f=document.querySelector(".form"),A=document.querySelector(".load-more");let c="",i=1;function l(e){d.error({message:e,position:"topRight"})}function H(e){d.info({message:e,position:"topRight"})}function v(e){i*m>=e?(u(),H("We're sorry, but you've reached the end of search results.")):x()}f.addEventListener("submit",async e=>{e.preventDefault();const r=f.elements["search-text"].value.trim();if(r===""){l("Please enter a search query!");return}c=r,i=1,O(),u(),g();try{const s=await p(c,i);if(s.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}w(s.hits),v(s.totalHits)}catch{l("Something went wrong. Please try again later.")}finally{L()}});A.addEventListener("click",async()=>{i+=1,u(),g();try{const e=await p(c,i);w(e.hits),I(),v(e.totalHits)}catch{l("Something went wrong. Please try again later.")}finally{L()}});function I(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
