// jQuery Event Methods

// click()

// The click() method attaches an event handler function to an HTML element.

// The function is executed when the user clicks on the HTML element.

// $(document).ready(function () {
//     $("p").click(function () {
//         $(this).hide();
//     });
// });



// ========================================



// dblclick()

// The dblclick() method attaches an event handler function to an HTML element.

// $(document).ready(function () {
//     $("p").dblclick(function () {
//         $(this).hide();
//     });
// });



// ========================================



// The mouseenter() method attaches an event handler function to an HTML element.
// The mouseleave() method attaches an event handler function to an HTML element.
// The mousedown() method attaches an event handler function to an HTML element.
// The mouseup() method attaches an event handler function to an HTML element.

// $(document).ready(function () {
//     $("#alert").mouseenter(function () {
//         alert("You Entered P! Tag");
//     });
// });



// ========================================



// hover()

// The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.

$(document).ready(function () {
    $("#alert").hover(function () {
        alert("You Entered P! Tag");
    },
        function () {
            alert("Bye! You Now Leave P! Tag");
        });
});



// ========================================



// The on() Method

// The on() method attaches one or more event handlers for the selected elements.

$("p").on({
    mouseenter: function () {
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
        $(this).css("background-color", "lightblue");
    },
    click: function () {
        $(this).css("background-color", "dodgerblue");
    }
});



// ========================================