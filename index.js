var noOfDrums = document.querySelectorAll(".pkey").length;

for (let i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".pkey")[i].addEventListener("click", function () {
    var sound = new Audio("sounds/key" + (i + 1).toString() + ".mp3");
    sound.play();
    var buttonPressed = this;
    buttonPressed.classList.add("pressed");

    setTimeout(function () {
      buttonPressed.classList.remove("pressed");
    }, 100);
  });
}

document.addEventListener("keypress", function (event) {
  var sound;
  switch (event.key) {
    case "q":
      sound = new Audio("sounds/key1.mp3");
      break;
    case "w":
      sound = new Audio("sounds/key2.mp3");
      break;
    case "e":
      sound = new Audio("sounds/key3.mp3");
      break;
    case "r":
      sound = new Audio("sounds/key4.mp3");
      break;
    case "t":
      sound = new Audio("sounds/key5.mp3");
      break;
    case "y":
      sound = new Audio("sounds/key6.mp3");
      break;
    default:
      break;
  }
  sound.play();
  var buttonPressed = document.getElementById(event.key).classList;
  buttonPressed.add("pressed");
  setTimeout(function () {
    buttonPressed.remove("pressed");
  }, 100);
});
