import 'regenerator-runtime';
import '../styles/main.css';
import "../styles/responsive.css";
import restaurants from "../public/data/DATA.json";


let listRestorant = "";
let dataRestorant = restaurants;
dataRestorant.restaurants.forEach((dataRestorant) => {
  listRestorant += `
<article class="post-item">
            <div class="post-item__card">
            <img class="post-item__thumbnail" src='${dataRestorant.pictureId}' alt="${dataRestorant.name}">
            <p class="post-item__city">Kota ${dataRestorant.city}</p>
            <p class="post-item__rating">Rating: ${dataRestorant.rating}</p>
            </div>           
            <div class="post-item__content">
              <h1 class="post-item__title"><a href="#">${dataRestorant.name}</a></h1>
              <p class="post-item__description">${dataRestorant.description}</p>
            </div>
          </article>
  `;
  document.querySelector(".posts").innerHTML = listRestorant;
});


const menu = document.querySelector('#menu');
const  hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  });
  
  hero.addEventListener('click', function () {
    drawer.classList.remove('open');
  });
  
  main.addEventListener('click', function () {
    drawer.classList.remove('open');
  });
