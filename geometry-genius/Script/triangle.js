function calculateTriangle() {
  const inputBase = document.getElementById('triangle-base');
  const inputBaseText = inputBase.value;
  const base = parseFloat(inputBaseText);


  const inputHeight = document.getElementById('triangle-height');
  const inputHeightText = inputHeight.value;
  const height = parseFloat(inputHeightText);

  const area = .5 * base * height;

  const areaDisplay = document.getElementById('triangle-area');
  areaDisplay.innerText = area;
}