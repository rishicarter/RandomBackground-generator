var h3tag = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randbtn = document.querySelector('.btn');

// h3tag.textContent = body.style.background + ";";

function setH3tag() {
	h3tag.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value + " ," 
	+ color2.value + ")" ;
	setH3tag();
}
function randRGB() {
	return Math.floor((Math.random() * 255) + 1);
}

function randGradient() {
	var r, g, b, rgb;
	r = randRGB();
	g = randRGB();
	b = randRGB();
	rgb1 = "rgb("+r+", "+g+", "+b+")";
	r = randRGB();
	g = randRGB();
	b = randRGB();
	rgb2 = "rgb("+r+", "+g+", "+b+")";	
	body.style.background = "linear-gradient(to right, "
	+ rgb1 + " ," 
	+ rgb2 + ")" ;
	setH3tag();
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
randbtn.addEventListener("click", randGradient)