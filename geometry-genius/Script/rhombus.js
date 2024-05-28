function calculateRhombus() {
  const input1 = document.getElementById('rhombus-d1').value;
  const d1 = parseFloat(input1);

  const input2 = document.getElementById('rhombus-d2').value;
  const d2 = parseFloat(input2);

  const area = .5 * d1 * d2;

  const rhombusArea = document.getElementById('rhombus-area');
  rhombusArea.innerText = area;
}