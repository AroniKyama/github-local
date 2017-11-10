//created by kyama
//id:700655620

//variables:

var baseArray = ["Apple","Strawberry","Mango","Custard Apple","Orange","Blue Berry","Banana","Plum","Cherry","Guava","Water Melon","Grape"];

var slot1Array=[];//blank array.
var slot2Array=[];//blank array.
var slot3Array=[];//blank array.

function start(){
	//create event listeners for buttons
	document.getElementById("playButton").addEventListener("click",play,false);
	document.getElementById("cheatButton").addEventListener("click",cheat,false);
	document.getElementById("oddsButton").addEventListener("click",odds,false);
	document.getElementById("showButton").addEventListener("click",showArrays,false);
	
	//function to populate the slot arrays with random Element:
	createSlots();
	
}//end function start

function play(){
	//display one random number from each corresponding array
	
	//variables to store them
	var slot1Value = slot1Array[randomGen()];
	var slot2Value = slot2Array[randomGen()];
	var slot3Value = slot3Array[randomGen()];
	document.getElementById("slot1Textbox").value = slot1Value;
	document.getElementById("slot2Textbox").value = slot2Value;
	document.getElementById("slot3Textbox").value = slot3Value;
	
	//is it jackpot??
	if((slot1Value==slot2Value)&&(slot2Value==slot3Value)){
		//jackpot
		document.getElementById("jackpotPara").innerHTML="hurray !!you won jackpot";
	}else{
		//lost
		document.getElementById("jackpotPara").innerHTML="OOPS!! better luck next time!";
		
	}//end if else for display
}//end function play
function cheat(){
	var cheatValue = slot1Array[randomGen()];
	//assign same value to all
	document.getElementById("slot1Textbox").value = cheatValue;
	document.getElementById("slot2Textbox").value = cheatValue;
	document.getElementById("slot3Textbox").value = cheatValue;
	//display win message
	document.getElementById("jackpotPara").innerHTML="hurray !!you won jackpot";
	
}//end function cheat
function odds(){
	//display the odds:
	document.getElementById("jackpotPara").innerHTML="the odds of winning jackpot approx.: "+((1/12)*(1/12)*(1/12));
	
}//end function odds
function showArrays(){
	//variables: 
	var messageString="slot3Array: "
	
	//using the toString() method:
	
	document.getElementById("jackpotPara").innerHTML="baseArray:  "+baseArray.toString() +"<br/>";
	document.getElementById("jackpotPara").innerHTML +="slot1Array:  "+slot1Array.join() +"<br/>";
	document.getElementById("jackpotPara").innerHTML +="slot2Array:  "+slot2Array.sort().join("|") +"<br/>";
	//document.getElementById("jackpotPara").innerHTML +="slot3Array:  "+slot3Array.sort().join("") +"<br/>";
	
	//display using for in array
	for(var i in slot3Array){
		messageString +=slot3Array[i] + ""
	}//end for in 
	document.getElementById("jackpotPara").innerHTML +=messageString;
	
	
	
}//end function showArrays
function createSlots(){
	for (var i = 0;i < baseArray.length;++i){
		slot1Array.push(baseArray[randomGen()]); //one way using push
		slot2Array[i]=baseArray[randomGen()];//second way
		slot3Array[i]=baseArray[randomGen()];//doing this second way
		
	}//end for 
	
}//end function createSlots

//a function to create and return a random number
function randomGen(){
	//Math.random()
		//return a random integer between 0 and 11 incl.
		return Math.floor(Math.random()*12);
}//end function randomGen





//adding event listener for page load
window.addEventListener("load",start,false);