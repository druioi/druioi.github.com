const buttonElement = document.getElementById('convert');

buttonElement.addEventListener('click', function () {
  var x = Number(document.getElementById('coordonneeX').value)
  var y = Number(document.getElementById('coordonneeY').value)
  document.getElementById('result').value = convert(x,y)
});
