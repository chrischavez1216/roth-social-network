const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartIcon = document.querySelector('.cart-icon');
const userImg = document.querySelector('#user-img');
const desktopMenu = document.querySelector('#desktop-menu');
const loginLinks = document.querySelector('#login-links');
const mobileMenu = document.querySelector('#mobile-menu');
const burguerMenu = document.querySelector('.button-mobile-menu');

// Toggle desktopMenu
const toggleDesktopMenu = () => {
    
}
userImg.addEventListener('click', toggleDesktopMenu);

// Toggle loginLinks
const toggleLoginLinks = () => {
    mobileMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
    loginLinks.classList.toggle('inactive');
}
userImg.addEventListener('click', toggleLoginLinks);

// Toggle mobileMenu 
const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive');
    loginLinks.classList.add('inactive');
}
burguerMenu.addEventListener('click', toggleMobileMenu);

// Toggle shoppingCart
const toggleShoppingCart = () => {
    shoppingCart.classList.toggle('inactive');
    loginLinks.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
shoppingCartIcon.addEventListener('click', toggleShoppingCart);


