var animationEnd = (function (el) {
    var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
    };

    for (var t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
})(document.createElement('div'));

$('document').ready(function () {

    ScrollReveal().reveal('.navbar', {
        delay: 250,
        origin: 'top',
        distance: '100px',
        duration: 750
    });
    ScrollReveal().reveal('.main-page', {
        duration: 750
    });
    ScrollReveal().reveal('.main-page-title-text', {
        delay: 750,
        origin: 'bottom',
        distance: '60px',
        duration: 750
    });
    ScrollReveal().reveal('.main-page-desc-text', {
        delay: 1000,
        duration: 750

    });
    ScrollReveal().reveal('.main-page-tagline-text', {
        delay: 1250,
        duration: 750

    });
    ScrollReveal().reveal('.main-page-btn', {
        delay: 1500,
        duration: 750

    });
    ScrollReveal().reveal('.main-page-bottom-text', {
        delay: 250,
        origin: 'bottom',
        distance: '100px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-hero', {
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-title-text', {
        delay: 750,
        origin: 'bottom',
        distance: '60px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-desc-text', {
        delay: 1000,
        duration: 750

    });
    ScrollReveal().reveal('.glasses-page-tagline-text', {
        delay: 1250,
        duration: 750

    });
    ScrollReveal().reveal('.glasses-page-hero-button-section', {
        delay: 1500,
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-hero-bottom', {
        delay: 1750,
        origin: 'top',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-section', {
        delay: 100,
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-title', {
        delay: 100,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-title', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-title-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-simple', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-simple-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-sleek', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-sleek-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-stylish', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-stylish-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-design-btn', {
        delay: 1000,
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-section', {
        delay: 100,
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-title', {
        delay: 100,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-title', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-title-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-simple', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-simple-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-sleek', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-sleek-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-stylish', {
        delay: 250,
        origin: 'left',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-stylish-desc', {
        delay: 500,
        origin: 'bottom',
        distance: '50px',
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-function-btn', {
        delay: 1000,
        duration: 750
    });
    ScrollReveal().reveal('.glasses-page-use-section', {
        delay: 100,
        duration: 750
    });

    $('#home-link').on('click', function (event) {
        console.log("AYE HOME");
    });

    $('#glasses-link').on('click', function (event) {
        console.log("AYE GLASSES");
    });

    $('#team-link').on('click', function (event) {
        console.log("AYE TEAM");
    });

    // Transition effect for navbar
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });

    $('#scroll-to-design').on('click', function (event) {
        $('html, body').animate({
            scrollTop: $(".glasses-page-design-section").offset().top
        }, 2000);
    });
});
