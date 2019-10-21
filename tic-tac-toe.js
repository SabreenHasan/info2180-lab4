window.onload = function() {
	this.startGame()
	document.getElementsByClassName("btn")[0].onclick = function(){
        var GRID_SIZE = 12;
		var squares = document.getElementsByTagName("div");
        for(let i = 3; i < GRID_SIZE; i++) {
        	squares[i].innerHTML = ("")
        }
        document.getElementById("status").classList.remove("you-won")
        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or O."
		cannotSelect(document.getElementById("status"))        
    }
}

	//**EXERCISE 1, 2 AND 3**//
	function startGame() {
		var GRID_SIZE = 12;
		var squares = document.getElementsByTagName("div");
		for (let i = 3; i < GRID_SIZE; i++) { //Iterates through all the divs but begins at the 3rd grid that makes the board.
			squares[i].classList.add("square");
			squares[i].onmouseover = function() {
				squares[i].classList.toggle("hover", true);
			}
			squares[i].onmouseout = function() {
				squares[i].classList.toggle("hover", false);
			}
			squares[i].onclick = function() {  //Checks if someone clicks a square on the board
			if (squares[i].innerHTML === "" || squares[i].innerHTML === "O") {
				squares[i].classList.toggle("O", false)
				squares[i].innerHTML = "X"
				squares[i].classList.toggle("X", true)
				checkWinner(squares) 				
			}

			else if (squares[i].innerHTML === "X") {
				squares[i].classList.toggle("X", false)
				squares[i].innerHTML = "O"
				squares[i].classList.toggle("O", true)
				checkWinner(squares)
			}
			
		}	
		cannotSelect(squares[i])
	}
}

	//**EXERCISE 4**//
	function checkWinner(value) {
		if (value[3].innerHTML !== "" && value[3].innerHTML === value[4].innerHTML && value[3].innerHTML === value[5].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[3].innerHTML + " is the Winner!"
		} 

		else if (value[6].innerHTML !== "" && value[6].innerHTML === value[7].innerHTML && value[6].innerHTML === value[8].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[6].innerHTML + " is the Winner!"
		}

		else if (value[9].innerHTML !== "" && value[9].innerHTML === value[10].innerHTML && value[9].innerHTML === value[11].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[9].innerHTML + " is the Winner!"
		}

		else if (value[3].innerHTML !== "" && value[3].innerHTML === value[6].innerHTML && value[3].innerHTML === value[9].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[3].innerHTML + " is the Winner!"
		}

		else if (value[4].innerHTML !== "" && value[4].innerHTML === value[7].innerHTML && value[4].innerHTML === value[10].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[4].innerHTML + " is the Winner!"
		}

		else if (value[5].innerHTML !== "" && value[5].innerHTML === value[8].innerHTML && value[5].innerHTML === value[11].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[5].innerHTML + " is the Winner!"
		}

		else if (value[3].innerHTML !== "" && value[3].innerHTML === value[7].innerHTML && value[3].innerHTML === value[11].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[3].innerHTML + " is the Winner!"
		}

		else if (value[5].innerHTML !== "" && value[5].innerHTML === value[7].innerHTML && value[5].innerHTML === value[9].innerHTML) {
			document.getElementById("status").className = "you-won"
			document.getElementById("status").innerHTML = "Congratulations! " + value[5].innerHTML + " is the Winner!"
		}
	}

	//**EXERCISE 5 AND 6**//
	function cannotSelect(node) {
		if (node.nodeType == 1) {
			node.setAttribute("unselectable", "on")
		}

		var child = node.firstChild;
		while(child) {
			cannotSelect(child);
			child = child.nextSibling;
		}
	}
		

	
