//Run this when web page is loaded to check if the site is allowed or blocked
var urlOfTheCurrentWindow = window.location.href;
var nameOfTheSite = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
if (localStorage.getItem("isBlocked") == 1){
	alert('You are not allowed to come to '+nameOfTheSite+'. Prepare to be zapped.');
	//The code should run here
}
