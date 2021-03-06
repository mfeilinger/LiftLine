// Userlist data array for filling in info box
var liftLineStatusData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/liftlinestatus', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.liftname + '">' + this.liftname + '</a></td>';
            tableContent += '<td>' + this.liftstatus + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this.liftlinetime + '">'+this.liftlinetime+'</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#liftlist table tbody').html(tableContent);
    });
};
