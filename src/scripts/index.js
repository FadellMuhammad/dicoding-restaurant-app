import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const content = document.querySelector('#content-responsive');

menu.addEventListener('click', function (event) {
    content.classList.toggle('open');
    event.stopPropagation();
})