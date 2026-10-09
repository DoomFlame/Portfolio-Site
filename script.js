// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').classList.add('hidden');
});

// nav vars
const toggleButton = document.querySelector('.nav-toggle');
const closeButton = document.querySelector('.nav-close');
const nav = document.querySelector('.site-nav');

// open nav menu
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.site-nav').classList.toggle('open');
});

// close nav menu
toggleButton.addEventListener('click', () => nav.classList.add('open'));
closeButton.addEventListener('click', () => nav.classList.remove('open'));
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});