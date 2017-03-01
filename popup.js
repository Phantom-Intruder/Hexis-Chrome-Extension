
function onSettingsButtonClick(){
	window.open('settings.html', '_blank');
}

function onCheckButton(){
	
}

function onAllowSiteButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   
    var domain = getDomainNameFromUrl(urlOfTheCurrentWindow);
    alert("Allowed the whole site "+domain);
    allowDomain();
});
}

function getDomainNameFromUrl(urlOfTheCurrentWindow){
    urlOfTheCurrentWindow = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
    return urlOfTheCurrentWindow;
}

function allowDomain(){
    chrome.tabs.executeScript(null, {file: "removeFromStorage.js"});
}

function onBlockSiteButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   
    var domain = getDomainNameFromUrl(urlOfTheCurrentWindow);
	blockDomain();
    alert("Blocked the whole site "+domain);
});
}

function blockDomain(){
	chrome.tabs.executeScript(null, {file: "addToStorage.js"});
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

