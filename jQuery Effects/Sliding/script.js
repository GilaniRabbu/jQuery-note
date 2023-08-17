// jQuery Effects - Sliding

// The jQuery slide methods slide elements up and down.

// jQuery slideDown() Method
// The jQuery slideDown() method is used to slide down an element.

// jQuery slideUp() Method
// The jQuery slideUp() method is used to slide up an element.

// jQuery slideToggle() Method
// The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
// If the elements have been slid down, slideToggle() will slide them up.
// If the elements have been slid up, slideToggle() will slide them down.

// Syntax
// $(selector).slideDown(speed,callback);
// $(selector).slideUp(speed,callback);
// $(selector).slideToggle(speed,callback);

$("#btn-slideup").click(function () {
    $("#para").slideUp("slow");
});

$("#btn-slidedo").click(function () {
    $("#para").slideDown("slow");
});

$("#btn-slideto").click(function () {
    $("#para").slideToggle("slow");
});