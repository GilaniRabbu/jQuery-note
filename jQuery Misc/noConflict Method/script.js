// jQuery Misc

// The noConflict() Method

// What if you wish to use other frameworks on your pages, while still using jQuery?



// jQuery and Other JavaScript Frameworks

// There are many other popular JavaScript frameworks like: Angular, Backbone, Ember, Knockout, and more.

// What if other JavaScript frameworks also use the $ sign as a shortcut?

// If two different frameworks are using the same shortcut, one of them might stop working.

// The jQuery team have already thought about this, and implemented the noConflict() method.

// The noConflict() method releases the hold on the $ shortcut identifier, so that other scripts can use it.



$.noConflict();
jQuery(document).ready(function () {
    jQuery("button").click(function () {
        jQuery("p").text("jQuery is still working!");
    });
});



// var jq = $.noConflict();
// jq(document).ready(function () {
//     jq("button").click(function () {
//         jq("p").text("jQuery is still working!");
//     });
// });



// $.noConflict();
// jQuery(document).ready(function ($) {
//     $("button").click(function () {
//         $("p").text("jQuery is still working!");
//     });
// });