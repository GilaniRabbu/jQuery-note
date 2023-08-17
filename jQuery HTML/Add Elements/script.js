// jQuery HTML

// jQuery Add Elements

// Add New HTML Content

// We will look at four jQuery methods that are used to add new content

// append() - Inserts content at the end of the selected elements

// prepend() - Inserts content at the beginning of the selected elements

// after() - Inserts content after the selected elements

// before() - Inserts content before the selected elements

$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function () {
        $("ol").append("<li>Appended item</li>");
    });
});

$(document).ready(function () {
    $("#btn3").click(function () {
        $("p").prepend("<b>Prepended text</b>. ");
    });

    $("#btn4").click(function () {
        $("ol").prepend("<li>Prepended item</li>");
    });
});

$(document).ready(function () {
    $("#btn11").click(function () {
        $("a").before("<b>Before </b>");
    });

    $("#btn12").click(function () {
        $("a").after("<b>After </b>");
    });
});