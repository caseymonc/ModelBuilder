// JavaScript Document
function bindSpinner(){
	$( document ).bind( 'mobileinit', function(){
	  $.mobile.loader.prototype.options.text = "loading";
	  $.mobile.loader.prototype.options.textVisible = false;
	  $.mobile.loader.prototype.options.theme = "c";
	  $.mobile.loader.prototype.options.html = "";
	});
}

function showSpinner(message){
	$.mobile.loading( 'show', {
		text: message,
		textVisible: true,
		html: ""
	});
}

function hideSpinner(){
	$.mobile.loading( 'hide' );	
}

var gSpinnerIsShowing = false;
function toggleSpinner(message){
	if(gSpinnerIsShowing){
		gSpinnerIsShowing = false;
		hideSpinner();	
	}else{
		gSpinnerIsShowing = true;
		showSpinner(message);
	}
}