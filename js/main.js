/*
Colton Zuvich
Basic Javascript to enact onclick handler for photos as well as a changing date footer.

-code was adapted from Steve Paulings lectures and lab notes to fit the purpose of image counting...
*/

/* establish global variables */
/*global window, document*/
var counter = 1;

//functions
function image_switch(index) {
    
    //pragma
    "use strict";
//    alert ("here");
    
    //variables
    var pix = ["images/coffee.jpg", "images/drive.jpg", "images/kingscross.jpg", "images/offigo.jpg"],
        main_pic = document.getElementById("main_image");

    //Next Button
    if (index === 0) {
        if (counter === pix.length - 1) {
            counter = 0;
            /* = means assigning a reset to the counter*/
        } else {
            counter += 1;
            /* counter adds one if not*/
        }
    } else {
        /*previous button, wraps around from 0 because that's the starting point, and the previous goes to the end and counts down from there */
        if (counter === 0) {
            counter = pix.length - 1;
        } else {
            counter -= 1;
        }
    }

    // select image source
    main_pic.src = pix[counter];
}