//Run this when web page is loaded to check if the site is allowed or blocked
var urlOfTheCurrentWindow = window.location.href;
var nameOfTheSite = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
if (localStorage.getItem("isBlocked") == 1){
	alert('You are not allowed to come to '+nameOfTheSite+'. Prepare to be zapped.');
	//The code should run here
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://hexis-band.azurewebsites.net/report_activity.php?habitId=3ss",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "22e16f5d-eb05-0e39-d459-dcf753111c9e"
  }
}

$.ajax(settings).done(function (response) {
 // console.log(response);
});
}
