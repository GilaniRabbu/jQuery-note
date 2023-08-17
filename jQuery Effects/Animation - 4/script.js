// jQuery Effects - Animation

// jQuery animate() - Uses Queue Functionality

// By default, jQuery comes with queue functionality for animations.

// This means that if you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls.

// Then it runs the animate calls ONE by ONE.

// So, if you want to perform different animations after each other, we take advantage of the queue functionality

$(document).ready(function () {
    $("button").click(function () {
        var div = $("div");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
    });
});