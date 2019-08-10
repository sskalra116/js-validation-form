/*
	Name: Shahbegh Singh Kalra
	Date: 12/04/2017
	Lab: customFormValidation
	Purpose: Final project progress
*/



$(document).ready(function(){

	$( "#accordion" ).accordion();
});


var availableTags = [
	"Transcendental meditation",
	"Guided meditation",
	"Heart Rhythm Meditation",
	"Kundalini",
	"Guided Visualization",
	"Qi Gong",
	"Zazen",
	"Mindfulness",
	"Spiritual",
	"Movement",
	"Focused",
	"Chanting",
	"Chakra meditation"
];
$(document).ready(function(){
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});
});

$(document).ready(function(){
	$( "#button" ).button();
});

$(document).ready(function(){
    $("button").click(function(){
        var div = $("div1");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
});
	
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});


$(document).ready(function(){
	$( "#radioset" ).buttonset();
});



$( "#controlgroup" ).controlgroup();



$( "#tabs" ).tabs();



$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});


$(document).ready(function(){
	$( "#datepicker" ).datepicker({
	inline: true
	});
});



$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});



$( "#progressbar" ).progressbar({
	value: 20
});


$(document).ready(function(){
	$( "#spinner" ).spinner({min: 1, max: 20});
});



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);

$(document).ready(function(){
	$("#button").click(affect);
});
function affect(){
	$("#textarea").toggle();
	event.preventDefault();
}

//Function that writes to the output area only when form is validated
	$.validator.setDefaults({
		submitHandler: function() {
		var number = new String($("#number").val());
		var email = new String($("#email").val());
		var pass = new String($("#password").val());
		var spin = new String($("#spinner").val());
		var check = new String($("#meditation").val());
		var radio = $("input[name='radio']:checked").val();
		var auto = new String($("#autocomplete").val());
		var datepick = new String($("#datepicker").val());
		var text = new String($("#textarea").val());
		(document).getElementById("content").innerHTML = number+"<br>"+email+"<br>"+pass+"<br>"+spin+"<br>"+check+"<br>"+radio+"<br>"+auto+"<br>"+datepick+"<br>"+text;
			
		}
	});
	
	//Function for specifying rule for text only
	$.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
	});

/*JQuery validation plugin*/
$(document).ready(function(){
    
	//setting rules for validation
	$("#myForm").validate({
		rules:{
			email:{
				required:true,
				email:true
			},
			password:{
				required:true,
				minlength:5
			},
			number: {							
				required: true,
				maxlength: 10,
			//for numeric responses only
				number:true
			},
			message: {
				required:true,
				//For text response only
				alpha: true
			},
			autocomplete:{
				required: true,
				//For text response only
				alpha: true
			},
			spinner:{
			//for numeric responses only
				number: true
			}
		},
		//messages displayed for each field in case user makes error
		messages:{
			
			email:{
				required:"Please input an email",
				email:"Enter a valid email"
			},
			password:{
				required:"Please input a password",
				minlength:"Minimum length should be 5"
			},
			number: {							
				required:"Please input a number",
				maxlength: "Maximum length should be 10",
				number: "Please enter a number only" 
			},
			message: {
				required:"Your comment is required",
				alpha: "Text only "
			},
			autocomplete: {
				required:"Please specify your area of concentration",
				alpha:"Text only please"
			},
			spinner:{
				number:"Please enter a number"
			}
		}
		
	});
	if( $("#myForm").validate() == true )
	{
		output();
	}
	 $("#submit").click(function(){
            $("#myForm").submit();
            
		});
});

	
	
			
	   