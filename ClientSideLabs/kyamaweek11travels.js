var asyncRequest;//variable for xhr
function getRentals(){
	try{
		//instantiate xhr
		asyncRequest=new XMLHttpRequest;
		asyncRequest.addEventListener("readystatechange",rentalData,false);
		asyncRequest.open("GET","kyamatravels.xml",true);//async request
		asyncRequest.send(null);
	}catch(exception){
		alert("XHR failed"+exception.mesageText);
	}//end try catch
	
}//end function getRentals
function rentalData(){
	if(asyncRequest.readyState==4&&asyncRequest.status==200&&asyncRequest.responseXML){
		var carArray=asyncRequest.responseXML.getElementsByTagName("car");
		for(var i=0;i<carArray.length;i++){
			var tRow=document.createElement("tr");
			var td=document.createElement("td");
			//gets an array of all attributes of car
			var car =carArray.item(i).attributes;
			var messageText="";
				for(var j=0;j<car.length;j++){
					messageText+=car.item(j).name+":"+car.item(j).value+"";
					console.log(messageText);
				}//end inner for
			td.innerHTML=messageText;
			tRow.appendChild(td);
			document.getElementById("rentalTable").appendChild(tRow);
		}//end for
		
		document.getElementById("rentalTable").style.visibility="visible";
	}//end if
	
}//end function rentalData

function loadCruises(){
	//instantiate xhr
		asyncRequest=new XMLHttpRequest;
		asyncRequest.addEventListener("readystatechange",cruiseData,false);
		asyncRequest.open("GET","kyamatravels.xml",true);//async request
		asyncRequest.send(null);
}//end function loadCruises

function cruiseData(){
	if(asyncRequest.readyState==4&&asyncRequest.status==200&&asyncRequest.responseXML){
		var cruiseDetails=asyncRequest.responseXML.getElementsByTagName("cruiseDetails");
		for(var i=0;i<cruiseDetails.length;i++){
			var cruise=cruiseDetails.item(i);//get one cruise Element
			var cruiseName=cruise.getElementsByTagName("cruiseName").item(0).firstChild.nodeValue;
			var pTag=document.createElement("p");
			var textnode=document.createTextNode(cruiseName);
			var radio=document.createElement("input");
			radio.type="radio";
			radio.id=cruiseName;
			radio.name="cruiseDetails";
			radio.value=cruiseName;
			radio.addEventListener("change",function(){showCruises(this.value)},false);
			pTag.appendChild(radio);
			pTag.appendChild(textnode);
			document.getElementById("cruiseTD").appendChild(pTag);
			console.log(radio.id+""+cruiseName);
			
		}//end for
	}//end if
}//end function cruiseData

function showCruises(cruiseSelected){
	//instantiate xhr
	asyncRequest=new XMLHttpRequest;
	asyncRequest.addEventListener("readystatechange",function(){
		if(asyncRequest.readyState==4&&asyncRequest.status==200&&asyncRequest.responseXML){
			var cruiseDetails=asyncRequest.responseXML.getElementsByTagName("cruiseDetails");
			
			for(var i=0;i<cruiseDetails.length;i++){
				var cruise=cruiseDetails.item(i);//get one cruise element
				var cruiseName=cruise.getElementsByTagName("cruiseName").item(0).firstChild.nodeValue;
				if(cruiseName==cruiseSelected){
					//name matched.show details and exit for
					var days=cruise.getElementsByTagName("days").item(0).firstChild.nodeValue;
					var ship=cruise.getElementsByTagName("ship").item(0).firstChild.nodeValue;
					var shipType=cruise.getElementsByTagName("ship").item(0).getAttribute('type');
					var startsFrom=cruise.getElementsByTagName("startsFrom").item(0).firstChild.nodeValue;
					var oceanView=cruise.getElementsByTagName("oceanView").item(0).firstChild.nodeValue;
					var interior=cruise.getElementsByTagName("interior").item(0).firstChild.nodeValue;
					
					messageText="Cruise Name: " +cruiseName +
					            "<br>Number of Days: "+days+
								"<br>Ship: "+ship+ "-Type:" +shipType +
								"<br>Starts From: "+startsFrom+
								"<br>Pricing: "+
								"<br>Ocean View :$"+oceanView+
								"<br>Interior:$"+interior;
					document.getElementById("detailsTD").innerHTML=messageText;
					break;//exit for loop if cruise name matches
					
				}//end inner if
			}//end for
	
		}//end if
	},false);
	asyncRequest.open("GET","kyamatravels.xml",true);//async request
	asyncRequest.send(null);
	
}//end function showCruises

window.addEventListener("load",function(){
	document.getElementById("rentalTable").style.visibility="hidden";loadCruises();
	document.getElementById("carRentalsButton").addEventListener("click",function(){
		if(document.getElementById("rentalTable").style.visibility=="hidden"){
			getRentals();
		}//end if
	}//end inner anonymous function
	,false);
	
}//end outer anonymous function
,false);