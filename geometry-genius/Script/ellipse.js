function calculateEllipse() {
  const input1 = document.getElementById('ellipse-a').value;
  const a = parseFloat(input1);

  const input2 = document.getElementById('ellipse-b').value;
  const b = parseFloat(input2);

  const area = 3.1418 * a * b;

  const ellipseArea = document.getElementById('ellipse-area');
  ellipseArea.innerText = area;
}

