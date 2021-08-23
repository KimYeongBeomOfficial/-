const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelectorAll('.navbar_menu');
const searchIcon = document.querySelector('.search_icon');

toggleBtn.addEventListener("click", () => {
    menu.forEach(elem => elem.classList.toggle('hidden'));
    searchIcon.classList.toggle('hidden')
});