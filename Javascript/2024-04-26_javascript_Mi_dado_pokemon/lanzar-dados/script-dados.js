
//Math.floor(Math.random() * (max - min + 1) + min);
function numeroHasta6(){
    num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    // num = num = Math.floor(Math.random()*6);
    // dado6.innerHTML = `El numero que ha salido es el ${num}`;
    pantalla6.value = "";
    pantalla6.value = num;
    reproduceAudio();
    return pantalla6.value;
}
function numeroHasta10(){
    // dado10 = document.getElementById("dadoHasta10");
    // dado10.innerHTML = "";
    num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    // dado10.innerHTML = num;
    pantalla10.value = "";
    pantalla10.value = num;
    reproduceAudio();
    return pantalla10.value;
}
function numeroHasta50(){
    //parece que para input no es necesario el getElementById
    pantalla50 = document.getElementById("pantalla50");
    // dado50 = document.getElementById("dadoHasta50");
    // dado50.innerHTML = "";
    num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    // dado50.innerHTML = num;
    pantalla50.value = "";
    pantalla50.value = num;
    reproduceAudio();
    return pantalla50.value;
}

function numeroHasta100(){
    // dado100 = document.getElementById("dadoHasta100");
    // dado100.innerHTML = "";
    num = num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    // dado100.innerHTML = num;
    pantalla100.value = "";
    pantalla100.value = num;
    reproduceAudio();
    return pantalla100.value;
}
function reset(){
    pantalla6.value = "";
    pantalla10.value = "";
    pantalla50.value = "";
    pantalla100.value  = "";
}
function reproduceAudio(){
    (new Audio('assets/dados.mp3')).play();
}