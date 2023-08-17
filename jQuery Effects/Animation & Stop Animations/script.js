// jQuery Effects - Animation

// With jQuery, you can create custom animations.

// jQuery Animations - The animate() Method
// The jQuery animate() method is used to create custom animations.

// jQuery Stop Animations
// The jQuery stop() method is used to stop animations or effects before it is finished.

// jQuery stop() Method
// The jQuery stop() method is used to stop an animation or effect before it is finished.
// The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.

// Syntax
// $(selector).animate({params},speed,callback);
// $(selector).stop(stopAll,goToEnd);

// To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!

// Color animation is not included in the core jQuery library.

// It is also possible to define relative values
// (the value is then relative to the element's current value).

// This is done by putting += or -= in front of the value.

$("#width-chn").click(function () {
    $("div").animate({
        left: '300px',
        height: '+=50px',
        width: '+=50px'
    });
});

$("#btn-animate").click(function () {
    $("#para").animate({ opacity: '.7', fontSize: '2rem' }, 3000);
});

$("#btn-stop").click(function () {
    $("#para").stop();
});