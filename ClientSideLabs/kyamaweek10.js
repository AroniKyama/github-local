//created by kyama
//id:700655620

//event listener for page load

window.addEventListener("load",function(){
	fillStates();//fills the states for the options
	
	//event listener for the drop down change event
	document.getElementById("stateDropdown").addEventListener("change",function(){
		//pass the state selected and call function to match the state selected for its capital city
		
		var selectedIndex=document.getElementById("stateDropdown").selectedIndex;
		//gets the index of the state selected by the userAgent
		var selectedState=document.getElementById("stateDropdown").options[selectedIndex].value;
		//gets the name of the state selected for the options list
		//call a function to raise xhr and compare the state name to getits capital.
		
		findCapital(selectedState);
		
		
	},false)//end  event listener for select
	
	//event listener for textButton
	document.getElementById("textXHR").addEventListener("click",getTextfile,false);//end event listener for click button
},false);//end load event listener

function fillStates(){
	//raise an xhr and fill states in to the options
	try{
		var xhr=new XMLHttpRequest();//xhr instantiated
		
		//create event listener
		xhr.addEventListener("readystatechange",function(){
			
			if(xhr.readyState==4&&xhr.status==200&&xhr.responseText){
				//we have the xml file
				var statesArray=xhr.responseXML.getElementsByTagName("state");
				//this is a node list of state tags
				var selectTag=document.getElementById("stateDropdown");
				
				//loop through
				for(var i=0;i<statesArray.length;i++){
					var stateName=statesArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;//gets the name of one state
					//create option elementFromPoint
					var optionTag=document.createElement("option");
					optionTag.value=stateName;
					optionTag.innerHTML=stateName;
					//append option tag to select tag:
					selectTag.appendChild(optionTag);
					
				}//end for
			}//end if
			
		},false);//end event listener
		xhr.open("get","states.xml",true);//request open
		xhr.send(null);
		
	}//end try
	catch(exception){
		//xhr failed
		alert("XHR Failed");
	}
	
	
}//end function fill states
function findCapital(selectedState){
	//raise xhr,craete ready state event lsitener,the from the xml file loop 
	//through and compare the state to selectedState and its sibling element will be the capital
	
	try{
		var xhr=new XMLHttpRequest();//xhr initiated
		//create event listener
		xhr.addEventListener("readystatechange",function(){
			if(xhr.readyState==4&&xhr.status==200&&xhr.responseText){
				//we have the xml file
				var statesArray=xhr.responseXML.getElementsByTagName("state");
				//this is node list of state tags
				
				//loop through
				for(var i=0;i<statesArray.length;i++){
					stateName=statesArray.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
					//compare if the state name is the same as the selected
					if(selectedState==stateName){
						var capital=statesArray.item(i).getElementsByTagName("capital").item(0).firstChild.nodeValue;
						
						//display the result
						document.getElementById("capitalLabel").innerHTML=capital;
						//match found .so exit the function
						return;
					}//end inner if
			}//end for
			}//end if
		},false);//end event listener
		xhr.open("get","states.xml",true);//request open
		xhr.send(null);
	}
	catch(exception){
		//xhr failed
		alert("XHR Failed");
	}//end catch
	
	
	
}//end function findCapital
function getTextfile(){
	//raise xhr
	var xhr=new XMLHttpRequest();
	//ready state event
	
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200&&xhr.responseText){
			//display the text
			document.getElementById("textDiv").innerHTML=xhr.responseText;
			
		}//end if
		
	}//end function
	xhr.open("get","AboutAjax.txt",true);
	xhr.send(null);
}//end function getTextfile
