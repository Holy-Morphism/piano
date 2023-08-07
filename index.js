var txtVisible = true;
var clicked = true;
var colorChange = true;
var noOfDrums = document.querySelectorAll(".pkey").length;

for (let i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".pkey")[i].addEventListener("click", function () {
    var sound = new Audio("sounds/key" + (i + 1).toString() + ".mp3");
    sound.play();
  });
}

function onClick() {
  document.getElementById("stat").innerHTML = clicked
    ? "Bye World"
    : "Hello World";
  clicked = !clicked;
}

function changeColor() {
  document.getElementById("stat").style.color = colorChange ? "red" : "Yellow";
  colorChange = !colorChange;
}

function changeVisibility() {
  document.querySelector("h1").classList.toggle("visable");
  document.getElementById("invi").innerHTML = txtVisible
    ? "Appear"
    : "Disappear";
  txtVisible = !txtVisible;
}
