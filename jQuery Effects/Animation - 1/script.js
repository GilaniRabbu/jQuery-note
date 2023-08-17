// jQuery Effects - Animation

$('button').click(function () {
    $('div').animate({
        'left': '100px',
        'top': '100px'
    }, 500).animate({
        'opacity': '0.5'
    }, 500).animate({
        'fontSize': '20px'
    }, 500);
});