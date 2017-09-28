var nav = document.getElementById('nav-toggle');
var menu = document.getElementById('nav-list');

nav.addEventListener('click', function() {
  menu.classList.toggle('is-active');
});