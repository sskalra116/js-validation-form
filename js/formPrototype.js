$(document).ready(function(){

	$( "#accordion" ).accordion();
});


var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
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
	$( "#spinner" ).spinner();
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
	$("#button").click(affect)
});
function affect(){
	$("#effect1").toggle();
	event.preventDefault();
}
  
  

  
  
  
$(document).ready(function() {

	$('#submit').click(output);  
});
	
	function output(){
		(document).getElementById("content").innerHTML = "Hello World!";
		event.preventDefault();
	}
			
	   