// jQuery Effects - Animation

// jQuery animate() - Using Pre-defined Values

// You can even specify a property's animation value as "show", "hide", or "toggle"

$(document).ready(function () {
    $("button").click(function () {
        $("div").animate({
            height: 'toggle'
        });
    });
});