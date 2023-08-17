// jQuery Effects - Animation

$(document).ready(function () {
    // When the animation is finished, add a new div to the page
    $('#box').animate({
        'top': '100px'
    }, 500).delay(500).queue(function () {
        $(this).append('<div>New div</div>');
    });
});