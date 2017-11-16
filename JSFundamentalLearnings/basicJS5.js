function start(){
	document.getElementById("resultButton").addEventListener("click",findAreaAndPerimeter,false);
	document.getElementById("changeButton").addEventListener("click",changeStyle,false);
}
function findAreaAndPerimeter(){
	var side=document.getElementById("sideTextbox").value;
	
	//side=parseInt(side);
	if (side==""){
		window.alert("enter a valid input");
	}
	
	var areasq=side*side;
	var perimeter=(4*side);
	document.getElementById("resultPara").innerHTML="area of the square is :"+areasq+" </br>permieter of the square is:"+perimeter;
	
	
	
}//end function findAreaAndPerimeter
function changeStyle(){

	text.style.fontSize = "14pt";
	text.style.fontFamily = "Comic Sans MS";
	text.style.color = "green";
}//end function changeStyle

//here this is the evnetlisterner for load
window.addEventListener("load",start,false);