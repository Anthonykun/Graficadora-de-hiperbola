var caja = document.getElementById("cajita");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

boton.addEventListener("click", dibujoPorClick);

function dibujarLinea(color, xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(caja.value);
  lienzo.clearRect(0, 0, d.width, d.height);
  for(l = 1; l <= lineas; l++)
  {
    dibujarLinea("blue", 0, (l - 1) * 200 / lineas, l * 500 / lineas, 200);
  }
}
