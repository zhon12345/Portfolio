const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__links');
const year = document.querySelector('#copyright-year')

// Display Mobile Menu
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// Close Mobile Menu when nav links is clicked
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);

// Auto Update copyright year
year.innerText = new Date().getFullYear();