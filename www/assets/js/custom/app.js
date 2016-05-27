$(document).ready(function() {

    // Scroll To
    $('a[href^="#"]').click(function(){
        var id = $(this).attr('href');
        var offset = $(id).offset().top;
        $('html, body').animate({scrollTop: offset}, 1500);
        return false;
    });

    // Ajust  Main Title Height
    var windowHeight = $(window).height();
    $('.block-homeview').css({'position': 'relative', 'top': windowHeight/3});

    // bootstrap Letter FX plugin on Main Title
    $('.app-title').letterfx({"fx":"fall","letter_end":"stay","fx_duration":"100ms", "timing":"150"});


});
