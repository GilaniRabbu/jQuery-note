// jQuery Effects - Hide and Show

// With jQuery, you can hide and show HTML elements with the hide() and show() methods.

// You can also toggle between hiding and showing an element with the toggle() method.

// Syntax
// $(selector).hide(speed,callback);
// $(selector).show(speed,callback);
// $(selector).toggle(speed,callback);

$("#btn-hide").click(function () {
    $("#para").hide(500);
});

$("#btn-show").click(function () {
    $("#para").show(1000);
});

$("#btn-toggle").click(function () {
    $("#para").toggle(1000);
});