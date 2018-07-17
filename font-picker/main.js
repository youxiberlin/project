var fontsize = document.getElementById("fontsize");

fontsize.addEventListener("change", displayFontsize);
fontsize.addEventListener("change", changeFontsize);

function displayFontsize() {
  document.getElementById("output").innerHTML = " " + this.value;
}

function changeFontsize(){
  document.getElementById("demo").style.fontSize = this.value + "px";
}

var fontcolor = document.getElementById("fontcolor");

fontcolor.addEventListener("change", displayFontColor);
fontcolor.addEventListener("change", changeFontColor);

function displayFontColor(){
  document.getElementById("output-fontcolor").innerHTML = " " + this.value;
}

function changeFontColor(){
  document.getElementById("demo").style.color = this.value;
}


var background = document.getElementById("background");

background.addEventListener("change", displayColor);
background.addEventListener("change", changeColor);

function displayColor(){
  document.getElementById("output-color").innerHTML = " " + this.value;
}

function changeColor(){
  document.getElementById("demo").style.background = this.value;
}

var text = document.getElementById("text");
text.addEventListener("change", changeText)

function changeText(){
  document.getElementById("demo").innerHTML = this.value;
}


// random fontSize

const randomFontsize = document.getElementById("btn1");

const randomOutput = document.getElementById("random-output");


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function changeRandomFontsize(){
  document.getElementById("demo").style.fontSize = getRandomInt(8,63) + "px";
}

function displayRandomFontsize(){
  randomOutput.innerHTML = getRandomInt(8,63) + "px";
}

// randomFontsize.onclick = changeRandomFontsize;

randomFontsize.addEventListener("click", changeRandomFontsize);
randomFontsize.addEventListener("click", displayRandomFontsize);



// random Color

const randomFontcolor = document.getElementById("btn2");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// document.getElementById("btn2").onclick = changeRandomFontcolor;

function changeRandomFontcolor(){
  document.getElementById("demo").style.color = getRandomColor();
}

function displayRandomFontcolor(){
  randomOutput.innerHTML = getRandomColor();
}

randomFontcolor.addEventListener("click", changeRandomFontcolor);
randomFontcolor.addEventListener("click", displayRandomFontcolor);



const randomBackground = document.getElementById("btn3");

randomBackground.addEventListener("click", changeRandomBackground);
randomBackground.addEventListener("click", displayRandomFontcolor);

function changeRandomBackground(){
  document.getElementById("demo").style.backgroundColor = getRandomColor();
}
