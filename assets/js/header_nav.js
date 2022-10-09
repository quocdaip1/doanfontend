const btnMenuMobile = document.querySelector(
  ".header__nav-wrapper--navBar-mobile"
);
const menuMoblie = document.querySelector(
  ".header__navbar-mobile-wrapper--links"
);
const blackBox = document.querySelector('.blackBox');
const closeMenuMobile = document.querySelector(".close-btn");
closeMenuMobile.style.cursor = "pointer";
const btnMoveDown = document.querySelector(".move-down");
const btnMoveUp = document.querySelector(".move-up");
const listServerDropdown = document.querySelector('.Services_dropdown_mobile');
listServerDropdown.style.backgroundColor = "#999";

btnMenuMobile.addEventListener("click", function () {
    menuMoblie.classList.add("active1");
    blackBox.classList.add("active1");
});

blackBox.addEventListener('click', function() {
  menuMoblie.classList.remove("active1");
  listServerDropdown.classList.remove('active1');
  blackBox.classList.remove("active1"); 
})
closeMenuMobile.addEventListener("click", function () {
  menuMoblie.classList.remove("active1");
  listServerDropdown.classList.remove('active1');
  blackBox.classList.remove("active1"); 
});

btnMoveDown.addEventListener("click", function () {
        listServerDropdown.classList.add('active1');
        btnMoveDown.classList.add('active3');
        btnMoveUp.classList.add('active1');
});

btnMoveUp.addEventListener("click", function() {
    listServerDropdown.classList.remove('active1');
    btnMoveDown.classList.remove('active3');
    btnMoveUp.classList.remove('active1');
});