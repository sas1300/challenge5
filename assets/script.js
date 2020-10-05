

//Date information
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);


// I DON'T THINK I NEED THIS 
//create a new task in text area
//var createTask = function(taskText) {
   //var taskEnter = $("<textarea>"); 
//edit an existing task in text area
//remove an existing task in text area


//save content of text area into local storage when save button is clicked
//event listener...click event function

//save button click using jQuery
$("saveButton").click(function(event) {
     //event handler
     $("taskText").html()
     
     console.log(event);
     console.log(event.target);

    

    //outcome of the event - Save into local storage
    localStorage.setItem()

})



//determine if time slot of task area 
    //  has passed - color grey
    // current hour - color red
    // upcoming hour - color green
