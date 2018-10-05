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

    var styleTag = document.getElementById("the-style");
    var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
    
    if (sheet.cssRules) { // all browsers, except IE before version 9
        sheet.deleteRule(0);
    } else { // Internet Explorer before version 9
        sheet.removeRule(0);
    }
    
    $('#the-nav-bar').addClass("animated fadeInDown delay-2");
    $("#the-nav-bar").css("visibility", "visible");
    $("#the-nav-bar").one(animationEnd, function () {
        $("#the-nav-bar").removeClass("animated fadeInDown delay-2");
        console.log("AYE CLASSES REMOVED");
    });

    Barba.Pjax.start();
    Barba.Prefetch.init();

    $('#home-link').on('click', function (event) {
        console.log("AYE HOME");
    });

    $('#glasses-link').on('click', function (event) {
        console.log("AYE GLASSES");
    });

    $('#team-link').on('click', function (event) {
        console.log("AYE TEAM");
    });
});
