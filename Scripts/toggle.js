function disable(){
	console.log("disabled");
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', disable);
});
