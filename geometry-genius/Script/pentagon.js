function calculatePentagon() {
  const input1 = document.getElementById('pentagon-p').value;
  const p = parseFloat(input1);

  const input2 = document.getElementById('pentagon-b').value;
  const b = parseFloat(input2);

  const area = .5 * p * b;

  const pentagonArea = document.getElementById('pentagon-area');
  pentagonArea.innerText = area;
}