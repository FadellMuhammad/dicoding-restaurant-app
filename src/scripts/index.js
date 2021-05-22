import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const menu = document.querySelector('#menu');
const content = document.querySelector('#content-responsive');

menu.addEventListener('click', function (event) {
    content.classList.toggle('open');
    event.stopPropagation();
})

let html = "";
data.restaurants.forEach((restoran) => {
    html += `
        <div class="card">
            <h6 tabindex="0">${restoran.city}</h6>
            <img src="${restoran.pictureId}" alt="foto khas berbagai daerah" tabindex="0">
            <h5 tabindex="0">Rating : ${restoran.rating}</h5>
            <h3 tabindex="0">${restoran.name}</h3>
            <p tabindex="0">${restoran.description}</p>
        </div>
    `;
})

document.getElementById("daftar-restoran").innerHTML = html;