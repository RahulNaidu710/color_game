var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisp");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0; i<modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var guess = this.style.backgroundColor;
			if(guess === pickedColor){
				message.textContent = "Correct";
				resetbtn.textContent = "Play Again?";
				changeColors(guess);
				h1.style.backgroundColor = guess;
			}
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;
	message.textContent = "";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
	resetbtn.textContent = "New Colors";
}

resetbtn.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var s = "rgb(" + r + ", " + g + ", " + b + ")";
	return s;
}