/*
	Name: Shahbegh Singh Kalra
	Date: 12/10/2017
	Lab: Final Release
	Purpose: Js file for Final project 
*/


//UI widget accordion 
$(document).ready(function(){

	$( "#accordion" ).accordion();
});

// setting up tags for the autocomplete widget
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

//UI widget autocomplete
$(document).ready(function(){
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});
});


//UI widget button
$(document).ready(function(){
	$( "#button" ).button();
});


//effect when button is clicked
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

//UI widget datepicker 
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

//UI widget spinner
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
//produces toggle effect
function affect(){
	$("#textarea").toggle();
	event.preventDefault();
}

//Function that writes to the output area only when form is validated
	$.validator.setDefaults({
		submitHandler: function() {
		//number takes telephone number value 
		var number = new String($("#number").val());
		//email takes email value
		var email = new String($("#email").val());
		//pass takes password value
		var pass = new String($("#password").val());
		//spin takes spinner value for number of days
		var spin = new String($("#spinner").val());
		//check takes checkbox value/values
		var check = '';
		var checkboxes = $('input[type="checkbox"]:checked');
		for(var a = 0; a< checkboxes.length; a++)
			{
				check=check+checkboxes[a].value+", ";
			}
		//var check = new String($('input[type="checkbox"]:checked').val());
		//alert($('input[type="checkbox"]:checked').val());
		//radio takes selected radio value
		var radio = $("input[name='radio']:checked").val();
		//auto takes autocomplete value selectd by user
		var auto = new String($("#autocomplete").val());
		//datepick takes date value
		var datepick = new String($("#datepicker").val());
		//Text takes text value as message or comment
		var text = new String($("#textarea").val());
		(document).getElementById("content").innerHTML = "<label>Telephone: </label>"+number+"<br>"+"<label>Email: </label>"+email+"<br>"+
		"<label>Password: </label>"+pass+"<br>"+"<label>No.of practice days: </label>"+spin+"<br>"+"<label>Method selected: </label>"+check+"<br>"+
		"<label>Signed up for: </label>"+radio+"<br>"+"<label>Area of concentration: </label>"+
		auto+"<br>"+"<label>Start date: </label>"+datepick+"<br>"+"<label>Comments: </label>"+text;
			
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
