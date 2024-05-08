var resultado;
function sumarN1N2() {
  let num1 = parseInt(document.getElementById("num1").value);
  if (isNaN(num1)) {
    alert("EL valor introducido en el numero 1 no es correcto");
    return;
  }
  let num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num2)) {
    alert("EL valor introducido en el numero 2 no es correcto");
    return;
  }
  console.log(num1 + num2);
  mostrarResultado(num1 + num2);
}
function resta(x, y) {
  console.log(x - y);
  x = parseInt(x);
  y = parseInt(y);
  if (isNaN(x) || isNaN(y)) {
    alert("Uno de los valores introducidos no es correcto");
  }
  mostrarResultado(x - y);
  //return parseInt(x) - parseInt(y);
}
function sumaAuto(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  if (isNaN(x) || isNaN(y)) {
    alert("Uno de los valores introducidos no es correcto");
    return "";
}
 return x + y;
}
function restaAuto(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  if (isNaN(x) || isNaN(y)) {
    alert("Uno de los valores introducidos no es correcto");
    return "";
}
 return x -y;
}

function autoCalcula(x, y){
    if(x == ""){
        x = 0;
    } 
    if(y == ""){
        y = 0;
    }

    let sumValue = sumaAuto(x, y);
    let restValue =  restaAuto(x, y);
    document.getElementById("autoSum").innerHTML = sumValue;
    document.getElementById("autoRes").innerHTML = restValue;
    // mostrarResultado(sumValue);
    // mostrarResultado(restValue);
    console.log(sumValue, restValue);
}
function mostrarResultado(result) {
  document.getElementById("resultado").innerHTML = result;
//   document.getElementById("autoSum").innerHTML = result;
//   document.getElementById("autoRes").innerHTML = result;
}
