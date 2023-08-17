// jQuery HTML

// jQuery Dimensions

// With jQuery, it is easy to work with the dimensions of elements and browser window.

// jQuery has several important methods for working with dimensions

// width()
// height()
// innerWidth()
// innerHeight()
// outerWidth()
// outerHeight()

$("button").click(function () {
    $("#div1").width(600).height(400);
});

$(document).ready(function () {
    $("#btn").click(function () {
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });
});