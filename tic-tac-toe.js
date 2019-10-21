window.onload = function() {
	startGame()
	document.getElementsByClassName("btn")[0].onclick = function(){
        for(let i = 0; i < squares.length; i++){
            squares[i].innerHTML = ("")
}

	function startGame() {
		var GRID_SIZE = 12;
		var squares = document.getElementsByTagName("div");
		for (var i = 3; i < GRID_SIZE; i++) { //Iterates through all the divs but begins at the 3rd grid that makes the board.
			squares[i].setAttribute("class", "square");
			squares[k].onmouseover = classList.add("hover");
			squares[k].onmouseout = classList.add("square");
			squares[i].onclick = function() {  //Checks if someone clicks a square on the board
			if (squares[i].innerHTML === "" || squares[i].innerHTML === "O") {
				squares[i].classList.toggle("X", true)
				squares[i].innerHTML = "X"; 
				squares[i].classList.toggle("O", false)
			}

			else if (squares[i].innerHTML === "X") {
				squares[i].classList.toggle("X", false)
				squares[i].innerHTML = "O"
				squares[i].classList.toggle("O", true)
			}
			
		}	
		console.log(squares);	
	}
		

	
