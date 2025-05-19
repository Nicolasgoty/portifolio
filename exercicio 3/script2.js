//esta é uma calculadora simples
let n1;
let n2;
let res;
let nu;
function sobra(){ 
    n1 = Number(window.prompt("Digite o 1° número"));
    n2 = Number(window.prompt("Digite o 2° número"));
    res = n1 % n2;
    nu = res % 2;
    alert("O resultado é " + res + ".") ;
     if (nu == 0){
        alert("este número é par")
     }
     else{
        alert("Este número é impar")
     } 
    //essa função é a da divisão com sobra, ele divide os 2 números e mostra o resultado e a sobra
}
function multiplicacao(){ 
    n1 = Number(window.prompt("Digite o 1° número"));
    n2 = Number(window.prompt("Digite o 2° número"));
    res = n1 * n2;
   nu = res % 2;
    alert("O resultado é " + res + ".") ;
     if (nu == 0){
        alert("este número é par")
     }
     else{
        alert("Este número é impar")
     } 
    //essa função é a da multiplicação, ele multiplica os 2 números e mostra o resultado
}
function soma(){
    n1 = Number(window.prompt('Digite um número:'));
    n2 = Number(window.prompt('Digite outro número:'));
    res = n1 + n2;
    nu = res % 2;
    alert("O resultado é " + res + ".") ;
     if (nu == 0){
        alert("este número é par")
     }
     else{
        alert("Este número é impar")
     }
    //essa função é a da soma, ele soma os 2 números e mostra o resultado
}
function subtracao(){
    n1 = Number(window.prompt('Digite um número:'));
    n2 = Number(window.prompt('Digite outro número:'));
    res = n1 - n2;
    nu = res % 2;
    alert("O resultado é " + res + ".") ;
     if (nu == 0){
        alert("este número é par")
     }
     else{
        alert("Este número é impar")
     } 
    //essa função é a da subtração, ele subtrai os 2 números e mostra o resultado
}
function divisao(){
    n1 = Number(window.prompt('Digite um número:'));
    n2 = Number(window.prompt('Digite outro número:'));
    res = n1 / n2;
    nu = res % 2;
    alert("O resultado é " + res + ".") ;
     if (nu == 0){
        alert("este número é par")
     }
     else{
        alert("Este número é impar")
     } 
     //essa função é a da divisão0, ele divide os 2 números e mostra o resultado 


}
