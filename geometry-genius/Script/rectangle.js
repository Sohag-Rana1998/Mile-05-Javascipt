function calculateRectangle() {
  const inputWidth = document.getElementById('rectangle-width');
  const inputWidthText = inputWidth.value;
  const width = parseFloat(inputWidthText);

  const inputLength = document.getElementById('rectangle-length');
  const inputLengthText = inputLength.value;
  const length = parseFloat(inputLengthText);

  const area = width * length;

  const displayArea = document.getElementById('display-area');
  displayArea.innerText = area;

}