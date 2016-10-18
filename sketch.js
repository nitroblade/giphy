var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "dc6zaTOxFJmzC";
var limit;
var search;
var rm;

function setup() {
	noCanvas();
	var button = select('#submit');
	button.mousePressed(szukaj);
	search = select('#search');
	limit = select('#limit');
	rm = select('#remove');
	rm.mousePressed(usun);
}

function szukaj(){
	removeElements('container');
	createDiv('').parent('tata').id('container');

	var url = api +"&api_key="+ apiKey + "&q=" + search.value()  + "&limit=" + limit.value();
	loadJSON(url, backData);
}

function keyPressed(){
	if (keyCode == ENTER){
		szukaj();
	}
}

function backData(giphy){

	

	for (var i = 0; i < giphy.data.length; i++) {
		// createA(giphy.data[i].images.original.url,createImg(giphy.data[i].images.fixed_height.url).parent('container') ).parent('container');
		createA(giphy.data[i].images.original.url,'').id(giphy.data[i].images.original.url).parent('container');
		createImg(giphy.data[i].images.fixed_height.url).parent(giphy.data[i].images.original.url)

	}
	if (giphy.data.length <1) {
		createP("Nic nie znaleziono").parent('container');
	}
}