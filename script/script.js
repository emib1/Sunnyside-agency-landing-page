const hamburgerMenu = document.querySelector( ".open-menu");
const mobileMenu  = document.querySelector( ".moblie-nav ul");

mobileMenu.classList.add("hide")

hamburgerMenu.addEventListener("click", ()=> {
    mobileMenu.classList.toggle("hide")
})
