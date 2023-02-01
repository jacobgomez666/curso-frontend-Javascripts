
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconito = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDeskMenu);
menuIconito.addEventListener('click', toggleMobileMenu);


// Funcion para que funcione el iconito

function toggleMobileMenu(){
mobileMenu.classList.toggle('inactive')
}

// funcion para aparecer y desaparecer el menu
function toggleDeskMenu(){
    desktopMenu.classList.toggle('inactive')
}

