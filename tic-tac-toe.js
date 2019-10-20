window.onload = function() {

	var body = document.getElementsByTagName("body");
	console.log(body);

	var BOARD_SIZE = 9;
	var GRID_SIZE = 12;
	var board = document.getElementById("board"); 


	for (var i = 3; i < GRID_SIZE; i++) { //Iterates through all the divs but begins at the 3rd grid that makes the board.
		var squares = document.getElementsByTagName("div")[i].setAttribute("class", "square");
		console.log(squares);
	}
}
	
