
function onSettingsButtonClick(){
	window.open('settings.html', '_blank');
}



function onAllowSiteButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   
    var domain = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];

	   alert("Allowed the whole site "+domain);
       allowDomain();
});
}

function allowDomain(){
    chrome.tabs.executeScript(null, {file: "removeFromStorage.js"});
}

function onBlockSiteButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   
    var domain = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
	   blockDomain();
});
}

function blockDomain(){
	chrome.tabs.executeScript(null, {file: "addToStorage.js"});
}

function checkButton(){
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   
    var domain = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
    //check localstorage	
});
}



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('settingsButton').addEventListener('click', onSettingsButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('allowButtonSite').addEventListener('click', onAllowSiteButtonClick);
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('blockButtonSite').addEventListener('click', onBlockSiteButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkButton').addEventListener('click', checkButton);
});
