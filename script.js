window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('scroll-shadow');
    } else {
        navbar.classList.remove('scroll-shadow');
    }
};