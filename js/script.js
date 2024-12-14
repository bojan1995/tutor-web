// Го повикуваме DOM по вчитување на страницата
document.addEventListener('DOMContentLoaded', function() {

    // Земаме елементи за hamburger icon и мени
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    // Кога ќе кликнеме на toggle button
    toggleButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Спречува настанот да се пренесе нагоре
        mobileMenu.classList.toggle('active');
    });

    // Затворање на менито кога ќе кликнете надвор
    document.addEventListener('click', function() {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });

    // Затворање на менито кога ќе кликнете на категорија
    mobileMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') { // Проверува дали е кликнат линк
            mobileMenu.classList.remove('active');
        }
    });
});

// Промена на позадина на navbar при скролање
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});
