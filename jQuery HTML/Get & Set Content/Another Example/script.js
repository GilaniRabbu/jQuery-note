// jQuery HTML

// Get & Set Content - text(), html(), and val()

// text() - Sets or returns the text content of selected elements

$("#title h1").text("This is Heading For Another Website");

$("button").click(function () {
    var value = this.innerHTML;
    $("h1").text(value + " to calculate");
});