// jQuery Effects - Fading

// With jQuery you can fade an element in and out of visibility.

// jQuery fadeIn() Method
// The jQuery fadeIn() method is used to fade in a hidden element.

// jQuery fadeOut() Method
// The jQuery fadeOut() method is used to fade out a visible element.

// jQuery fadeToggle() Method
// The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.
// If the elements are faded out, fadeToggle() will fade them in.
// If the elements are faded in, fadeToggle() will fade them out.

// jQuery fadeTo() Method
// The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).

// Syntax
// $(selector).fadeIn(speed,callback);
// $(selector).fadeOut(speed,callback);
// $(selector).fadeToggle(speed,callback);
// $(selector).fadeTo(speed,opacity,callback);

$("#btn-fade").click(function () {
    $("#para").fadeOut(1000);
});

$("#btn-fade-in").click(function () {
    $("#para").fadeIn("slow");
});

// $("#btn-fade").click(function () {
//     $("#para").fadeOut(3000).fadeIn("slow");
// });

// $("#btn-fade-in").click(function () {
//     $("#para").fadeIn("slow").fadeOut(3000);
// });

$("#btn-toggle").click(function () {
    $("#para").fadeToggle("slow");
});

$("#btn-opacity").click(function () {
    $("#para").fadeTo("slow", 0.6); // Make Opacity Low
});