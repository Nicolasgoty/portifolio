let mostrarHTML = document.getElementById(`resultado`);
let contador = 1;
let numero = -1;
let zero = false;


function somar(){
    while(zero == false){
        numero += Number(prompt("Digite um número. O 0 irá parar tudo."));
        contador ++;
        mostrarHTML.innerHTML
    }

}