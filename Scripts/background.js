chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
	localStorage.setItem("isTracked",response);
	alert(response);
});