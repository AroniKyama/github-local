$(function(){
	$("#firstName").blur(function() {  
	alert( "Lose focus from firstName" );  
	});  

	$("h1,h2,h3" ).click(function() {  
	$( this ).slideUp();  
	});  

	var pdbl = $( "p:first" );  
	pdbl.dblclick(function() {  
	pdbl.toggleClass( "dbl" );  
	});  
});
