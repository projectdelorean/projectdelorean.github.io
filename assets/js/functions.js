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
});
