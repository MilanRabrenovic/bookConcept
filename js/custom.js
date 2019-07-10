$(document).ready(function () {

    $('.hamburger').on('click', function(){
        $('.main-header').toggleClass('menu-opened');
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $("body").addClass("scrolled-top");
            $(".main-header").addClass("offset-top");
        } else {
            $("body").removeClass("scrolled-top");
            $(".main-header").removeClass("offset-top");
        }
    });

    if ($('.testimonial-slider')) {
        $('.testimonial-slider').slick({
            fade: true,
            prevArrow: '<button class="slick-arrow--prev"><i class="ico-arrow-left"></i></button>',
            nextArrow: '<button class="slick-arrow--next"><i class="ico-arrow-right"></i></button>'
        });
    }
});
