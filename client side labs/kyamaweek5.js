//created by kyama
//id:700655620

//adding event listeners in start function
function start(){
	document.getElementById("fibbonacciButton").addEventListener("click",doFibbo,false);
	document.getElementById("delFibButton").addEventListener("click",delFibbo,false);
	document.getElementById("factorialButton").addEventListener("click",doFactorials,false);
	document.getElementById("delFactButton").addEventListener("click",delFactorial,false);
	
}
function doFibbo(){
	//declaring fibbanacci sequence array with first two elements
	var fibboArray=[];
	fibboArray[0] = 0;
	fibboArray[1] = 1;
	//getting parent element for ol
	var fibPara = document.getElementById("fibbonacciPara");
	//create ol element and add it as child to p
	var ol=document.createElement("ol");
	fibPara.appendChild(ol);
	//give the OL and id so we can delete
	ol.setAttribute("id","fibOl");
	//complete the fibbo array in for loop:
	for (var i=2;i<25;i++){
		//push elements into fibbo array
		fibboArray.push(fibboArray[(i-1)]+fibboArray[(i-2)]);
	}//end for
	//creating li elements and putting the array elements in it:
	for(var i in fibboArray){
		//create li
		var li=document.createElement("li");
		//add as child to ol
		ol.appendChild(li);
		//put array element i in li
		li.innerHTML=fibboArray[i];
		
	}//end for in
	
}//end function doFibbo

function delFibbo(){
	//getting parent and child elements
	var fibPara=document.getElementById("fibbonacciPara");
	var fibOl=document.getElementById("fibOl");
	if(fibOl){
		//ol exists delete it
		fibPara.removeChild(fibOl);
	}//end if
	
}//end function delFibbo
function doFactorials(){
	//create the table and TR/TD using a loop
	//add it as child to p
	//have id for table
	//inside td,to display factorial:call recursive function
	
	var factPara=document.getElementById("factorialPara");
	var table=document.createElement("table");
	//set id:
	table.setAttribute("id","factTable");
	factPara.appendChild(table);
	
	//loop through and create rows and tables
	for(var i=0;i<20;i++){
		var row=document.createElement("tr");
		var captionCell=document.createElement("td");
		var resultCell=document.createElement("td");
		
		//row-->to table; cells-->to tr;
		table.appendChild(row);
		row.appendChild(captionCell);
		row.appendChild(resultCell);
		captionCell.innerHTML="Factorial of "+i+" is :";
		resultCell.innerHTML=getFactorial(i);
		
	}//end for
	

}//end function doFactorials

function getFactorial(number){
	//this is a recursive function
	//base case:always ends and resolves recursive function
	if(number<=1){
		return 1;
	}
	
		//recursive case:
	if (number>1){
		return (getFactorial(number-1)*number);
	}
	
	
	
}//end function getFactorial
function delFactorial(){
	
	
}//end function delFactorial

//creating load event
window.addEventListener("load",start,false);
