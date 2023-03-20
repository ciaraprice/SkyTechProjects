
//function for displaying when buttons clicked
function display(number){
	var resultDiv = document.getElementById("displayView");
	if (resultDiv.innerHTML == "0"){
		resultDiv.innerHTML = " ";
	}
	resultDiv.innerHTML += number;
}
	

//function to clear display
function clearDisplay(){
	document.getElementById("displayView").innerHTML = "0";
}


// //functions for sum results

function calculate(){
	var displayStr = document.getElementById("displayView").innerHTML;
	console.log(displayStr);
	var myArray = [];
	if (displayStr.includes('+')) {
		myArray = displayStr.split('+').map(Number);
		result = (myArray[0] + myArray[1])
	}
	else if (displayStr.includes('-')) {
		myArray = displayStr.split('-').map(Number)
		result = (myArray[0] - myArray[1])
	}
	else if (displayStr.includes('/')) {
		myArray = displayStr.split('/').map(Number)
		result = (myArray[0] / myArray[1])
	}
	else if (displayStr.includes('*')) {
		myArray = displayStr.split('*').map(Number)
		result = (myArray[0] * myArray[1])
	}
	document.getElementById("displayView").innerHTML =result;
}




