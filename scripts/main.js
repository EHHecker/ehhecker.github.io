/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/glasses.png") {
		myImage.setAttribute("src", "images/glassesshatter.png");
	} else {
		myImage.setAttribute("src", "images/glasses.png");
	}
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Glasses are cool, ${myName}`;
	}
}
if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Glasses are cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
	setUserName();
});


/*
let myVariable;
myVariable = "Bob";
let myVariable = "Bob";
myVariable;
let myVariable = "Bob";
myVariable = "Steve";
let iceCream = "chocolate";
if (iceCream === "chocolate") {
	alert("Yay, I love chocolate ice cream!");
} else {
	alert("Awww, but chocolate is my favorite...");
}
let myVariable = document.querySelector("h1");
alert("hello!");
function multiply(num1, num2) {
	let result = num1 * num2;
	return result;
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
document.querySelector("html).addEventListener("click", function() {
	alert("Ouch! Stop poking me!");
});
document.querySelector("html").addEventListener("click", () => {
	alert("Ouch! Stop poking me!");
});
*/