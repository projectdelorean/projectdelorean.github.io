$('document').ready(function () {
    Barba.Pjax.start();
    Barba.Prefetch.init();

    $('#home-link').on('click', function (event) {
        console.log("AYE HOME");
    });
    
    $('#glasses-link').on('click', function (event) {
        console.log("AYE GLASSES");
    });
    
    $('#team-link').on('click', function(event){
        console.log("AYE TEAM");
    });
});
