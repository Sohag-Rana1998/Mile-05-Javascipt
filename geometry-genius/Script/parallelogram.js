function calculateParallelogram() {
  const inputBase = document.getElementById('parallelo-base').value;
  const base = parseFloat(inputBase);

  const inputHeight = document.getElementById('parallelo-height').value;
  const height = parseFloat(inputHeight);

  const area = base * height;

  const display = document.getElementById('parallelo-area');
  display.innerText = area;
}