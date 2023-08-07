var noOfDrums = document.querySelectorAll(".pkey").length;

for (let i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".pkey")[i].addEventListener("click", function () {
    var sound = new Audio("sounds/key" + (i + 1).toString() + ".mp3");
    sound.play();
    this.style.color = "red";
  });
}

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
