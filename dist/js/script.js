// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const toggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');

toggle.addEventListener('click', function(){
    toggle.classList.toggle('toggle-active');
    navMenu.classList.toggle('hidden');
});

