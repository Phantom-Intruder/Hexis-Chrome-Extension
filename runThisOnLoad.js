//Run this when web page is loaded to check if the site is allowed or blocked

	
	    var urlOfTheCurrentWindow = window.location.href;
	    var domain = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
	    if (domain === 'www.youtube.com'){
			alert('You are not allowed to come to '+domain+'. Prepare to be zapped.');
		}

