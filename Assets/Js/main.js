$(window).scroll(function () { 
    var wScroll = $(this).scrollTop();

    // Navbar
    if (wScroll > $('#home').offset().top - 30) {
        $('#menu').css({
            opacity : '.95'
        });
    } else {
        $('#menu').css({
            opacity : '0'
        });
    }
});