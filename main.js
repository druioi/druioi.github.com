

const buttonElement = document.getElementById('convert');

buttonElement.addEventListener('click', function () {
  var x = Number(document.getElementById('coordonneeX').value)
  var y = Number(document.getElementById('coordonneeY').value)
  document.getElementById('result').value = convert(x,y)
});

// ********* //
var x = ;
var y = ;
var output = document.getElementById('result');

var result = convert(x,y);
output = result;

alert(result)
