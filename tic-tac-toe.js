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
				checkWinner(squares) 
				squares[i].classList.toggle("O", false)
				squares[i].innerHTML = "X"
			}

			else if (squares[i].innerHTML === "X") {
				squares[i].classList.toggle("X", false)
				squares[i].innerHTML = "O"
				squares[i].classList.toggle("O", true)
				checkWinner(squares)
			}
			
		}	
		console.log(squares);	
	}

	function checkWinner(value) {
		if (value[0].innerHTML !== "" && value[0].innerHTML === value[1].innerHTML && value[0].innerHTML === value[2].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[0].innerHTML + " is the Winner!"
		} 

		else if (value[3].innerHTML !== "" && value[3].innerHTML === value[4].innerHTML && value[3].innerHTML === value[5].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[3].innerHTML + " is the Winner!"
		}

		else if (value[6].innerHTML !== "" && value[6].innerHTML === value[7].innerHTML && value[6].innerHTML === value[8].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[6].innerHTML + " is the Winner!"
		}

		else if (value[0].innerHTML !== "" && value[0].innerHTML === value[3].innerHTML && value[0].innerHTML === value[6].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[0].innerHTML + " is the Winner!"
		}

		else if (value[1].innerHTML !== "" && value[1].innerHTML === value[4].innerHTML && value[1].innerHTML === value[7].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[1].innerHTML + " is the Winner!"
		}

		else if (value[2].innerHTML !== "" && value[2].innerHTML === value[5].innerHTML && value[2].innerHTML === value[8].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[2].innerHTML + " is the Winner!"
		}

		else if (value[0].innerHTML !== "" && value[0].innerHTML === value[4].innerHTML && value[0].innerHTML === value[8].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[0].innerHTML + " is the Winner!"
		}

		else if (value[2].innerHTML !== "" && value[2].innerHTML === value[4].innerHTML && value[2].innerHTML === value[6].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[0].innerHTML + " is the Winner!"
		}
	}
		

	
