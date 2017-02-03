function onSettingsButtonClick(){
	window.open('settings.html', '_blank');
}

function onAllowPageButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   

	   alert("Allowed the page "+urlOfTheCurrentWindow+ " only");
});
}

function onAllowSiteButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   
    var domain = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];

	   alert("Allowed the whole site "+domain);
});
}

function onBlockPageButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   

	   alert("Blocked the page "+urlOfTheCurrentWindow+ " only");
	   chrome.storage.sync.set({ urlOfTheCurrentWindow:urlOfTheCurrentWindow });

});
}

function onBlockSiteButtonClick(){
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   
    var domain = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];

	   alert("Blocked the whole site "+domain);
	   chrome.storage.sync.set({ urlOfTheCurrentWindow:urlOfTheCurrentWindow });

});
}



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('settingsButton').addEventListener('click', onSettingsButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('allowButtonPage').addEventListener('click', onAllowPageButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('allowButtonSite').addEventListener('click', onAllowSiteButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('blockButtonPage').addEventListener('click', onBlockPageButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('blockButtonSite').addEventListener('click', onBlockSiteButtonClick);
});
