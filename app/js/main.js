(function(){
    $(".nav__link--cv, .nav__link--contact").on("click", function(e){
        $(".header").addClass("header--after-animation").removeClass("header--before-animation");
        $(".header__title").addClass("header__title--after-animation").removeClass("header__title--before-animation");
        $(".nav__link--back").addClass("nav__link--back--visible");
        if (e.target && e.target.matches(".nav__link--cv")) {
            $(".cv").addClass("section--visible");
        } else if (e.target && e.target.matches(".nav__link--contact")) {
            $(".contact").addClass("section--visible");
        }
    });

    $(".nav__link--back").on("click", function(){
        $(".header").addClass("header--before-animation").removeClass("header--after-animation");
        $(".header__title").addClass("header__title--before-animation").removeClass("header__title--after-animation");
        $(".nav__link--back").removeClass("nav__link--back--visible");
        $(".section").removeClass("section--visible");
    })
})();