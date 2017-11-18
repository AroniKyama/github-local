$(function(){
	//code starts here
	
	//here this helps in changing the texts in the tags
	$("#title").text("yes!! you succeeded in your first step");
	
	//by this you can directly change the html tags in this ids
	$("#first").html("<h2>yess!! energy doesn't lie</h2>");
	
	//trying to prepend and append to the tags of html by providing their id'savePreferences
	$("#second").prepend("<h2>this is by the prepend function of jquery</h2>");
	$("#second").append("<h2>this is by the append function of jquery</h2>");
	
	//this is to alter the anchor link in href
	$("#myAnchor").attr("href","https://wordpress.com/post/codeophobia.wordpress.com/25");
	
	//this is to add a css style sheet to particualar id
	$("#title").addClass("standout")
	
});