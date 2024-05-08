let num1=0;
let num2=0;
let operador;
 
 
function numero(value){
    if (pantalla.value === '0') {
        pantalla.value = value;
    } else {
        pantalla.value += value;
    }
}
 
function reset(){
    pantalla.value ="";
   num1=0;
   num2=0;
}
 
function guardarNum(op) {
    num1 = parseInt(pantalla.value);
    pantalla.value ="";
    if (isNaN(num1)) {
      num1 = 0;
     
    }
    operador = op
}
 
  function guardarNum2(){
    num2 =  parseInt(pantalla.value)
    pantalla.value ="";
    if (isNaN(num2)) {
        num2 = 0;
 
    }
  }
 
  function calcular() {
    if (num1 !== null && operador !== null && num2 !== null) {
      switch (operador) {
        case 1:
          pantalla.value = num1 + num2;
          break;
        case 2:
            pantalla.value = num1 - num2;
          break;
        case 3:
            pantalla.value = num1 * num2;
          break;
        case 4:
          if (num2 === 0) {
            alert('¡Error! No se puede dividir por cero.');
            return;
          }
          pantalla.value = num1 / num2;
          break;
      }
    }
}
 

  // function calcular() {
  //   if (num1 !== null && operador !== null && num2 !== null) {
  //     switch (operador) {
  //       case '+':
  //         num2 = num1 + num2;
  //         break;
  //       case '-':
  //         num2 = num1 - num2;
  //         break;
  //       case 'x':
  //         num2 = num1 * num2;
  //         break;
  //       case '/':
  //         if (num2 === 0) {
  //           alert('¡Error! No se puede dividir por cero.');
  //           return;
  //         }
  //         num2 = num1 / num2;
  //         break;
  //     }
  //   }