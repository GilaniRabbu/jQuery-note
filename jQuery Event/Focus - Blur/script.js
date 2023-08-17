// focus() - blur()

// The focus() method attaches an event handler function to an HTML form field.

// The blur() method attaches an event handler function to an HTML form field.

$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "tomato");
    });
    $("input").blur(function () {
        $(this).css("background-color", "lightgray");
    });
});



// ========================================



// click()

// The click() method attaches an event handler function to an HTML element.

// The function is executed when the user clicks on the HTML element.

$("#loginButton").click(function () {
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    if (password1 != "" && password2 != "") {

        if (password1 == password2) {
            alert("Successfully Login!");
        } else {
            alert("Login Denied!");
        }

    } else {
        alert("Please Enter Password");
    }
});



// ========================================