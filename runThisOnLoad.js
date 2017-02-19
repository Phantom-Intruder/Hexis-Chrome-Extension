//Run this when web page is loaded to check if the site is allowed or blocked
var urlOfTheCurrentWindow = window.location.href;
var nameOfTheSite = urlOfTheCurrentWindow.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
if (localStorage.getItem("isBlocked") == 1){
	alert('You are not allowed to come to '+nameOfTheSite+'. Prepare to be zapped.');
	//The code should run here
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://fcm.googleapis.com/fcm/send",
  "method": "POST",
  "headers": {
    "authorization": "key=AAAADA8BrWA:APA91bHY-twm8skpwPXtbjsjwoVefziqtQ0z8JgBNxuc5JJhiLI9PIeS37XgIdFpaR5kha_tRr3NxOCCeJkjz7ghc9HcEw_DWGbHByYHH_BITlweCnfm-ffileBPHF9hlLcSZZes1seV",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "309eb08e-b77d-8e02-ee28-84011de1acf9"
  },
  "processData": false,
  "data": "{\n  \"to\": \"fiJb6RRjfP0:APA91bEppO59pw_CEe2cMbGRzrcYTCH6zpJaZLorospcc12gRwfNVGQHn2e7SQX2CJmdm7UiSIg3I6abNa3-IJIvmCnFRxb67gAPxMawQX9aFZnmfFa6673wcEKuWhBKQEqaFJScFk55\",\n  \"data\": {\n    \"body\": \"You have accessed a restricted website\",\n    \"title\": \"Bad Habit Alert!!!\"\n  }\n}"
}

$.ajax(settings).done(function (response) {
  //console.log(response);
});

}
