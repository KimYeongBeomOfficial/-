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

const logInOut = document.querySelector(".top_login a");
const topId = document.querySelector(".top_id");

const ID_KEY = "MANGO_ID"
const savedId = localStorage.getItem(ID_KEY);

if (savedId !== null) {
    topId.innerText = `${savedId}님`;
    logInOut.innerText = "로그아웃";
    logInOut.href = "index.html";
} else {
    topId.innerText = "";
    logInOut.innerText = "로그인";
    logInOut.href = "MangoLogin.html";
}

logInOut.addEventListener("click", function() {
    localStorage.removeItem(ID_KEY);
});

const cartIcon = document.querySelector(".cart_icon a");

function handleCart() {
    if (savedId !== null) {
        cartIcon.href = "MangoCart.html";
    } else {
        cartIcon.href = "MangoLogin.html";
        alert("로그인이 필요합니다.")
    }
}

cartIcon.addEventListener("click", handleCart);

