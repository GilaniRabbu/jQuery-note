// jQuery HTML

// jQuery Set Attributes / Get Attributes

// The jQuery attr() method is used to get / set / change attribute values.

$(document).ready(function () {
    $('button').click(function () {
        alert($('#link').attr('href'));

        // change attribute values
        $("a").attr("href", "https://www.facebook.com/");

        // remove attribute values
        // $("a").removeAttr("href");
    });
});