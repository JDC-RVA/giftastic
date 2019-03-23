var ballers = ["steve nash", "steph curry", "kobe bryant", "allen iverson", "tracy mcgrady", "vince carter", "lebron james"];


function renderButtons(){ 

    $("#display-buttons").empty();

    for (var i = 0; i < ballers.length; i++){

        var newButton = $("<button>") 
        newButton.attr("class", "btn btn-danger");
        newButton.attr("id", "input")  
        newButton.attr("data-name", ballers[i]); 
        newButton.text(ballers[i]); 
        $("#display-buttons").append(newButton); 
    }
}

renderButtons();

$("#submitButton").on("click", function(){

	// grabs the user show input
	var player = $("#player-input").val().trim();
	// that input is now added to the array
	ballers.push(player);
	// the makeButtons function is called, which makes buttons for all my shows plus the user show
    renderButtons();
	// this line is so users can hit "enter" instead of clicking the submit button
	return false; 
})
