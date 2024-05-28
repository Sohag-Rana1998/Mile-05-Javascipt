

function getInputValue(inputById) {
  const inputText = document.getElementById(inputById).value;
  const value = parseFloat(inputText);
  return value;
}

function setInnerValue(setAreaId, areaValue) {
  const setValue = document.getElementById(setAreaId);
  setValue.innerText = areaValue;

  return setValue;

}


//  ---------->> Triangle Area--------->>

function calculateTriangle() {
  const base = getInputValue('triangle-base');
  const height = getInputValue('triangle-height');

  const area = .5 * base * height;

  const value = setInnerValue('triangle-area', area);

  return value;

}


//  ---------->> Rectangle Area--------->>


function calculateRectangle() {
  const width = getInputValue('rectangle-width');
  const length = getInputValue('rectangle-length');

  const area = width * length;

  const value = setInnerValue('rectangle-area', area);
  return value;

}




//---------->>Parallelogram----------->>

function calculateParallelogram() {
  const base = getInputValue('parallelo-base');
  const height = getInputValue('parallelo-height');
  const area = base * height;

  const value = setInnerValue('parallelo-area', area);
  return value;
}


//-------->> Rhombus------>>

function calculateRhombus() {
  const d1 = getInputValue('rhombus-d1');
  const d2 = getInputValue('rhombus-d2');
  const area = .5 * d1 * d2;
  const value = setInnerValue('rhombus-area', area);
  return value;
}

//-------->> Pentagon--------->>

function calculatePentagon() {
  const base = getInputValue('pentagon-b');
  const perimeter = getInputValue('pentagon-p');
  const area = 0.5 * base * perimeter;
  const value = setInnerValue('pentagon-area', area);
  return value;
}

//--------Ellipse--------->>

function calculateEllipse() {
  const a = getInputValue('ellipse-a');
  const b = getInputValue('ellipse-b');
  const area = 3.14 * a * b;
  const value = setInnerValue('ellipse-area', area);
  return value;
}
















