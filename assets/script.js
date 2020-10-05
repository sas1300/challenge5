

//Date information
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);


//save content of text area into local storage when save button is clicked
//event listener...click event function

//save button click using jQuery
$("saveButton").click(function(event) {
     //event handler
     var taskText = $("#taskText").val().trim();

     console.log(taskText);
     

    //outcome of the event - Save into local storage
    localStorage.setItem(taskText);
    
    console.log(localStorage);
})



//determine if time slot of task area 
    //  has passed - color grey
    // current hour - color red
    // upcoming hour - color green





    //jquery docs info: $( "#log" ).html( "clicked: " + event.target.nodeName );
     //What does this mean?????   LA says this if you want to place an item in your webpage.