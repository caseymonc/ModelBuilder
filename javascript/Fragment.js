// JavaScript Document

var currentFragment = false;
var showFragment = function(id){
	$(id).show();
	if(currentFragment && currentFragment != id){
		$(currentFragment).hide();	
	}
	
	currentFragment = id;
}

var hideFragment = function(id){
	$(id).hide();	
}