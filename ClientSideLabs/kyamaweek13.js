$(function(){
	//handler for .ready() called.
	$(window).on("load",function(){
		//display welcome message
		$("#welcome").text("Welcome to the world of jQuery");
		
		$("#jQHide").click(function(){
			$("h3").hide("slow");//slow or fst hide actions can be supplied ad arguments.hides all h3 elements of page.
			$("#jQHide").hide();
			
		})//end click event
		
		$("#jQshow").click(function(){
			$("h3").show("fast");
			$("#jQShow").show();
			
		})//end click event
		
		$("#simpleJQ").click(function(){
			//validate and evaluate
			var number1=0;
			var number2=0;
			if(!isNaN($("#input1").val())&&!isNaN($("#input2").val())){
				number1=parseInt($("#input1").val());
				number2=parseInt($("#input2").val());
				$("#result").text(number1+number2);
			}
			else{
				$("#result").text("invalid input(s).");
			}//end if else
			
		})//end click simpleJQ event
		
		$("#htmlButton").click(function(){
			$.get("jqAjax_info.html",function(data){
				$("#htmlAjax").html(data);
			})
		});//end click
		
		$("#text Button").click(function(){
			$.get("AboutAjax.txt",function(data){
				$("#textAjax").html(data);
			})
		});//aend click
		
		$("#capitalButton").click(function(){
			var stateInput=$("#stateTextBox").val();
			if(stateInput!=""){
				$.ajax({
					type:"GET",
					data:{},
					dataType:"xml",
					async:true,
					url:"states.xml",
					success:function(xml){
						findCapital(xml,stateInput)},//end success
						error:(function(xhr,textStatus,errorThrown){
							alert("An Erroe Occured"+errorThrown?errorThrown:xhr.status);
						})
				});//end ajax
				
			}//end if
			else{
				$("#capitalCity").text("input is blank");
			}
		});
		
		function findCapital(XMLdata,userInput){
			var matchFound=false;
			$(XMLdata).find("state").each(function(){
				var stateName=$(this).find("name").text();
				
				if(userInput.toLowerCase()==stateName.toLowerCase()){
					var capitalCity=$(this).find("capital").text();
					$("#capitalTextBox").text("capital of"+userInput+"is:"+capitalCity);
					matchFound=true;
					return false;//exit loop
				}//end if
			});//end each
			if(!matchfound){
			$("#capitalTextBox").text("no match found");}
		}//end function find capital
		
	});//end load
});//end ready)