$(window).load(function() {
    $("body").addClass('all-loaded');
});

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
    
    $('.freeway-use-case').on('click', function (event) {
        console.log("ASKDLAS")
        $("#freeway-collapse").collapse("toggle");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    
    $('.concert-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("toggle");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.baby-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("toggle");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.whale-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("toggle");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.funny-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("toggle");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.social-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("toggle");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.daughter-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("toggle");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.runyon-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("toggle");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.warriors-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("toggle");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("hide");
    });
    $('.moment-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("toggle");
        $("#anytime-collapse").collapse("hide");
    });
    $('.anytime-use-case').on('click', function (event) {
        $("#freeway-collapse").collapse("hide");
        $("#concert-collapse").collapse("hide");
        $("#baby-collapse").collapse("hide");
        $("#whale-collapse").collapse("hide");
        $("#funny-collapse").collapse("hide");
        $("#social-collapse").collapse("hide");
        $("#daughter-collapse").collapse("hide");
        $("#runyon-collapse").collapse("hide");
        $("#warriors-collapse").collapse("hide");
        $("#moment-collapse").collapse("hide");
        $("#anytime-collapse").collapse("toggle");
    });
});
