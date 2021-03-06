$(window).on('load', function () {
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
            scrollTop: $(".glasses-page-how-section").offset().top
        }, 1500);
    });

    $('.freeway-use-case').on('click', function (event) {
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
