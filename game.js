//var number1 = Math.round(Math.random() * 100);
// number1box.innerHTML = number1
//var number2 = Math.round(Math.random() * 100);

// const { random } = require("lodash");

// number2box.innerHTML = number2
const number2box = document.getElementById('number2');
const number1box = document.getElementById('number1');
// document.getElementsByClassName("sample").innerHTML = "Hey there"

var operator;
var score = 0;

var number3box = document.getElementById('number3');
var number3; //--------------Result


function randomise() {
	// Generate 2 random numbers
	number1 = Math.round(Math.random()*100)
	number2 = Math.round(Math.random()*100)
	
	// If the first number is smaller than the second number then swap the 2 numbers
	if(number1 < number2){
		var extra = number1
		number1 = number2
		number2 = extra
	}
	
	// To generate the result, use switch-case based on which perform operations.
	operator = Math.round(Math.random() * 5)
	// if(operator === 1){
	// 	number3 = number1 + 2
	// }else if(operator === 2){
	// 	number3 = number1 - number2
	// }else if(operator === 3){
	// 	number3 = number1 * number2
	// }else if(operator === 4){
	// 	number3 = number1/number2
	// }else if(operator === 5){
	// 	number3 = number1%number2
	// }else if(operator === 0){
	// 	randomise()
	// }

	switch(operator){
		case 1:
			number3 = number1 + number2
			break
		case 2:
			number3 = number1 - number2
			break
		case 3:
			number3 = number1 * number2
			break
		case 4:
			number3 = Math.floor(number1 / number2)
			break
		case 5:
			number3 = number1 % number2
			break
		case 0:
			randomise()
			
	}

	number1box.innerHTML = number1
	number2box.innerHTML = number2
	number3box.innerHTML = Math.floor(number3)

	console.log(number1,number2,number3, operator)
}

randomise();

// Select the plus, minus multiplication division operators using the dom manipulation
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")
// attach onclick method to each of the operators -> If the operation selected is the correct one then increment the score otherwise redirect the gameover.html

// var check = function(){
// 	if(operator === 1){
// 		randomise()
// 	   score = score+1;
// 	   console.log(score);
// 	   resetTime(timerId)
// 	}
// 	else{
// 		gameover();
// 	}
// }

// plus.onclick = check;
// minus.onclick = check;
// mul.onclick = check;
// divide.onclick = check;
// modulus.onclick = check;  
plus.onclick = () => {
	
	if(number1 + number2 === number3){
		// console.log("+ clicked")
		randomise()
		score = score+1
		resetTime(timerId)
	}else{
		location.href = "./gameover.html?score="+score
	}
}

minus.onclick = () => {
	
	if(number1 - number2 === number3){
		// console.log("+ clicked")
		randomise()
		score = score+1
		resetTime(timerId)
	}else{
		location.href = "./gameover.html?score="+score
	}
}

mul.onclick = () => {
	
	if(number1 * number2 === number3){
		// console.log("+ clicked")
		// console.log(score)
		randomise()
		score = score+1
		resetTime(timerId)
	}else{
		location.href = "./gameover.html?score="+score
	}
}


divide.onclick = () => {
	
	if(Math.floor(number1 / number2) === number3){
		// console.log("+ clicked")
		randomise()
		score = score+1
		// console.log(score)
		resetTime(timerId)
	}else{
		location.href = "./gameover.html?score="+score
	}
}


modulus.onclick = () => {
	
	if(number1 % number2 === number3){
		// console.log("+ clicked")
		randomise()
		score = score+1
		// console.log(score)
		resetTime(timerId)
	}else{
		location.href = "./gameover.html?score="+score
	}
}
var timer = document.querySelector("#timer")
// console.log(score)
var time;
var timerId;
function starttimer(){
	time = 20
	timer.innerHTML = time
	timerId = setInterval(()=>{
		time = time-1
		timer.innerHTML = time 
		if(time == 0){
			location.href = "./gameover.html?score="+score
		}

	},1000)
}

function resetTime(interval){
	clearInterval(interval)
	starttimer()
}

starttimer()