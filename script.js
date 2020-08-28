(function ($) {
    "use strict"; // Start of use strict

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $("#hover").hover(function(){
        $('.see-more').css('opacity', 1.0);
    },function(){
        $('.see-more').css('opacity', 0.0);
    });

    $("body").scrollspy({
        target: "#mainNav",
        offset: 70
    });
})(jQuery); // End of use strict



