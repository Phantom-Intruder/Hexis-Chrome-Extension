
function onAddPageButtonClick{
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlOfTheCurrentWindow = tabs[0].url;	   

	   alert("Added the page "+urlOfTheCurrentWindow+ " only");
});
}

function onSettingsButtonClick(){
	window.open('settings.html', '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addButtonPage').addEventListener('click', onAddPageButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addButtonSite').addEventListener('click', onAddSiteButtonClick);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('settingsButton').addEventListener('click', onSettingsButtonClick);
});
