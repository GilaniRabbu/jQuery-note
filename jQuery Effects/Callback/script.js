// jQuery Callback Functions

// A callback function is executed after the current effect is 100% finished.

// JavaScript statements are executed line by line.

// However, with effects, the next line of code can be run even though the effect is not finished.

// This can create errors.

// To prevent this, you can create a callback function.

// A callback function is executed after the current effect is finished.

// Syntax
// $(selector).hide(speed,callback);

$("#btn-callback").click(function () {
    $("#para").hide("slow", function () {
        alert("The Paragraph was Hiding");
    });
});