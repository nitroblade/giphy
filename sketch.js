var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "dc6zaTOxFJmzC";
var limit = "10";
var search;


function setup() {
	noCanvas();
	var button = select('#submit');
	button.mousePressed(szukaj);
	search = select('#search');
}

function szukaj(){
	var url = api +"&api_key="+ apiKey + "&q=" + search.value()  + "&limit=" + limit;
	loadJSON(url, backData);
}

function backData(giphy){
	for (var i = 0; i < giphy.data.length; i++) {
		createImg(giphy.data[i].images.fixed_height.url);

	}
	if (giphy.data.length <1) {
		createP("Nic nie znaleziono")
	}
}
