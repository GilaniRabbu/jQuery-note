// jQuery HTML

// jQuery Get and Set CSS Classes

// With jQuery, it is easy to manipulate the style of elements.

// jQuery has several methods for CSS manipulation. We will look at the following methods

// addClass() - Adds one or more classes to the selected elements

// removeClass() - Removes one or more classes from the selected elements

// toggleClass() - Toggles between adding/removing classes from the selected elements

// css() - Sets or returns the style attribute

// Add Class
$("#btn2").click(function () {
    $("h2, p").addClass("important bg-clr");
    $("div").addClass("title");
});

// Remove class
$("#btn3").click(function () {
    $("h3").removeClass("h3");
});

// Toggle class
$("#btn1").click(function () {
    $("h1").toggleClass("heading");
});

// CSS Method
// $("h4").css("font-size", "30px");
$("h4").css({ "color": "teal", "font-size": "30px", "font-family": "monospace" });