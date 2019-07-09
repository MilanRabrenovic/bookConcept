$(document).ready(function () {
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
});
