const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelectorAll('.navbar_menu');
const searchIcon = document.querySelector('.search_icon');

toggleBtn.addEventListener("click", () => {
    menu.forEach(elem => elem.classList.toggle('active'));
    searchIcon.classList.toggle('active')
});

const subMenu = document.querySelectorAll('.sub_menu');

menu[0].addEventListener("mouseenter", () => {
    subMenu[0].classList.toggle('active');
});
menu[0].addEventListener("mouseleave", () => {
    subMenu[0].classList.toggle('active');
});

menu[1].addEventListener("mouseenter", () => {
    subMenu[1].classList.toggle('active');
});
menu[1].addEventListener("mouseleave", () => {
    subMenu[1].classList.toggle('active');
});

menu[2].addEventListener("mouseenter", () => {
    subMenu[2].classList.toggle('active');
});
menu[2].addEventListener("mouseleave", () => {
    subMenu[2].classList.toggle('active');
});

menu[3].addEventListener("mouseenter", () => {
    subMenu[3].classList.toggle('active');
});
menu[3].addEventListener("mouseleave", () => {
    subMenu[3].classList.toggle('active');
});

menu[4].addEventListener("mouseenter", () => {
    subMenu[4].classList.toggle('active');
});
menu[4].addEventListener("mouseleave", () => {
    subMenu[4].classList.toggle('active');
});
