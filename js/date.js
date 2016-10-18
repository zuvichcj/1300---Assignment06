/*
Code adapted from Steve Pauling for Colton Zuvich's javascript assignment
*/

/* establish global variables */
/*global window, document*/

window.onload = function date() {
    "use strict";
    // variables
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        // get pieces of date
        
        full_date = new Date(),
        today = full_date.getDate(),
        this_month_text = monthNames[full_date.getMonth()],
        // this_month_text = "October",
        this_year = full_date.getFullYear(),
        
        // insert the date into the html file
        new_span = document.createElement('span'),
        new_text = document.createTextNode(today + ' ' + this_month_text + ' ' + this_year),
        position = document.getElementsByTagName('footer')[0];
    // append date to footer
    new_span.appendChild(new_text);
    position.appendChild(new_span);
};

/* this code essentially gets the full_date and displays that date by creating a text node that displays the day month and year in a correct format. */
