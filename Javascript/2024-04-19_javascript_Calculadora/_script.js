var resultado;
var num1 = 0;
var num2 = 0;
var operador;
var operacionRealizada = true;

function asignarValor(valor){
  pantalla = document.getElementById("pantalla");
  lastChar = pantalla.value.charAt(pantalla.value.length - 1);
  console.log(lastChar);
  if(lastChar == '='){
    limpiarPantalla();
  }
  number = parseFloat(valor);
  if(isNaN(number)){
    // if(pantalla.value.charAt(pantalla.value.length - 1) != valor){
    if(isNaN(lastChar)){
      console.log("Meerda");
      // num1 = pantalla.value;
    }else{
      pantalla.value += valor;
     if(valor != "="){
       operador = valor;
     }
    }
  }else{
    pantalla.value += number;
  }
}
function ejecutarOperaciones(){
  pantalla = document.getElementById("pantalla");
  let numeros = pantalla.value.split(/[^\d.]+/).map(Number);

  num1 = parseInt(numeros[0]);
  num2 = parseInt(numeros[1]);

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      ejecutarResta();   
      break;
    case 'x':
      resultado = num1 * num2;    
      break;
    case '/':
      resultado = num1 / num2;    
      break;
    default:
      break;
      // return false;
  }
  document.getElementById("resultado").value = resultado;
  // document.getElementById("pantalla").value = resultado;
  // document.getElementById("resultadop").innerHTML = resultado;
  // mostrarResultado(resultado.toFixed(4));
}

function ejecutarResta(){
  valor = document.getElementById("pantalla").value;
  let splited = pantalla.value.split('-');
  num1 = parseInt(splited[0]);
  num2 = parseInt(splited[1]);
  resultado = num1 - num2;
  
  // document.getElementById("pantalla").value = resultado;
  document.getElementById("resultado").value = resultado;
  // document.getElementById("resultadop").innerHTML = resultado;
}


function limpiarPantalla() {
  // document.getElementById("resultado").value = "";
  document.getElementById("pantalla").value = "";
}
function asignarOperador(opr){
  
}



