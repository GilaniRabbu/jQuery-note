// jQuery HTML

// jQuery Remove Elements

// To remove elements and content, there are mainly two jQuery methods

// remove() - Removes the selected element (and its child elements)

// empty() - Removes the child elements from the selected element

$(document).ready(function () {
    $("button").click(function () {
        // $("#div1").remove();
        // $("#div1").empty();
        $("div").remove(".test"); // Filter the Elements to be Removed
    });
});