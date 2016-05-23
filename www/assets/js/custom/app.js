$(document).ready(function() {

    // Ajust  Main Title Height
    var windowHeight = $(window).height();
    $('.block-homeview').css({'position': 'relative', 'top': windowHeight/3});

    // bootstrap Letter FX plugin on Main Title
    $('.app-title').letterfx({"fx":"fall","letter_end":"stay","fx_duration":"100ms", "timing":"150"});

});
