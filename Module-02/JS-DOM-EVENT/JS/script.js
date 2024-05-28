// option 01:
//<button onclick="document.body.style.backgroundColor= 'red'"> change bg</button>



// OPTION:02
//   <button onclick="makeYello()"> makeYello</button>


function makeYello() {
  document.body.style.backgroundColor = 'yellow';
}


//option 03:

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue'

}

//option 03: another

const makePurple = document.getElementById('make-purple');

makePurple.onclick = function makePurpleColor() {
  document.body.style.backgroundColor = 'purple';
}

option: 04

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
  document.body.style.backgroundColor = 'pink';
}

//option: 04 another

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
  document.body.style.backgroundColor = 'green';
})


// final:

document.getElementById('make-goldenrod').addEventListener('click', function () {
  document.body.style.backgroundColor = 'goldenrod';
})