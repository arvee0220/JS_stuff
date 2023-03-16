var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

const setGradient = () => {
	body.style.background = 
	`linear-gradient(to right, ${color1.value}, ${color2.value}`;
	css.textContent = body.style.background;
}

const setRandomColor = () => {
	const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
	const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

	color1.value = randomColor1;
	color2.value = randomColor2;

	setGradient()

};

window.addEventListener('load', setGradient)

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

