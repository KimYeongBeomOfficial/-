const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelectorAll('.navbar_menu');
const searchIcon = document.querySelector('.search_icon');

toggleBtn.addEventListener("click", () => {
    menu.forEach(elem => elem.classList.toggle('active'));
    searchIcon.classList.toggle('active')
});

const subMenu = document.querySelectorAll('.sub_menu');

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("mouseenter", () => {
        subMenu[i].classList.add('active');
    });
    menu[i].addEventListener("mouseleave", () => {
        subMenu[i].classList.remove('active');
    });
}