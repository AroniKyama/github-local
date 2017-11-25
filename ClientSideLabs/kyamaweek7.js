//created by kyama
//id:700655620
var cookieName="myCookieName";

///////////////////////////////////////////

function start(){
	
	document.getElementById("saveButton").addEventListener("click",saveToLocalStorage,false);
	document.getElementById("clearButton").addEventListener("click",clearLocalStorage,false);
	document.getElementById("setCookieButton").addEventListener("click",setCookie,false);
	document.getElementById("readCookieButton").addEventListener("click",readCookie,false);
	document.getElementById("deleteCookieButton").addEventListener("click",deleteCookie,false);
	displayLocalStorage();
	setSessionStorage();
	
	
	
}//end function start

///////////////////////////////////////////


function saveToLocalStorage(){
	favKey=document.getElementById("keyTextbox").value;
	favValue=document.getElementById("valueTextbox").value;
	localStorage.setItem(favKey,favValue);
	displayLocalStorage();
	
}//end function saveToLocalStorage



///////////////////////////////////////////

function clearLocalStorage(){
	localStorage.clear();
	displayLocalStorage();
	
}//end function clearLocalStorage



///////////////////////////////////////////

function setCookie(){
	var fullName=(document.getElementById("cookieTextBox").value);
	var currentDate=new Date();//gives current date
	var expireDate;
	currentDate.setDate(currentDate.getDate()+1);//sets tomarrows date
	expireDate=currentDate.toUTCString();
	
	//SETTING THE COOKIE
	
	document.cookie=cookieName + "=" + fullName + ";expires=" +expireData + ";";
	document.getElementById("cookieLabel").innerHTML=document.cookie + "your cookie is baked";
	
	
}//end function setCookie

///////////////////////////////////////////


function readCookie(){
	var myCookie=document.cookie;
	document.getElementById("cookieLabel").innerHTML=myCookie.toString();
	
	
}//end function readCookie


///////////////////////////////////////////

function deleteCookie(){
	document.cookie=cookieName + "=;expires=Thu, 01 Jan 1970 00 UTC";
	document.getElementById("cookieLabel").innerHTML=document.cookie+ " cookie deleted";
	
}//end function deleteCookie

///////////////////////////////////////////

function setSessionStorage(){
	var myDate=new Date();
	if(!window.sessionStorage.getItem("mySession")){
		sessionStorage.setItem("mySession",myDate.toLocaleTimeString()+ ":" +myDate.toLocaleDateString());
		document.getElementById("welcomeLabel").innerHTML="welscome to storage set";
		
	}//end if
	document.getElementById("welcomeLabel").innerHTML +="Session name(key): "+sessionStorage.key(0) +" Session Value: "+sessionStorage.getItem("mySession");
	
}//end function setSessionStorage

////////////////////////////////////////////

function displayLocalStorage(){
	var lsLength=localStorage.length;
	var myFavPara=document.getElementById("myFavPara");
	//removes elements in fav para
	
	//the following function is for  mutiple child nodes to be removed
	while(myFavPara.firstChild){
		myFavPara.removeChild(myFavPara.firstChild);
	}//end while
	
	var table=document.createElement("table");
	table.setAttribute("id","myTable");
	lsKeyArray=[];//this array holds keys of local storage
	
	//get all the keys into the array
	for (var i=0;i<lsLength;i++){
		lsKeyArray[i]=localStorage.key(i);//getting one key at a time
		
	}//end for
	lsKeyArray.sort();
	
	for(var i in lsKeyArray){
		var lsKey =lsKeyArray[i];
		
		var tr=document.createElement("tr");
		var tdKey=document.createElement("td");
		var tdValue=document.createElement("td");
		var tdControls=document.createElement("td");
		var editButton=document.createElement("input");
		editButton.setAttribute("type","button");
		editButton.setAttribute("id",lsKey);
		editButton.setAttribute("value","Edit");
		editButton.addEventListener("click",function(e){editFavs(e.target.id)},false);
		var deleteButton=document.createElement("input");
		deleteButton.setAttribute("id",lsKey);
		deleteButton.setAttribute("value","Delete");
		deleteButton.setAttribute("type","button");
		deleteButton.addEventListener("click",function(e){deleteFavs(e.target.id)},false);
		
		tr.appendChild(tdKey);
		tr.appendChild(tdValue);
		tr.appendChild(tdControls);
		tdControls.appendChild(editButton);
		tdControls.appendChild(deleteButton);
		
		tdKey.innerHTML=lsKey;
		tdValue.innerHTML=localStorage.getItem(lsKey);
		table.appendChild(tr);
		
	}//end for
	myFavPara.appendChild(table);
}//end function displayLocalStorage


////////////////////////////////////////////

function editFavs(favKey){
	
	document.getElementById("keyTextbox").value=favKey;
	document.getElementById("valueTextbox").value=localStorage.getItem(favKey);
	
}//end function editFav

///////////////////////////////////////////////

function deleteFavs(favKey){
	localStorage.removeItem(favKey);
	displayLocalStorage()
}//end function deleteFav

//////////////////////////////////////////////////////////


window.addEventListener("load",start,false);
