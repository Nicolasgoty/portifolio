function somar () {
    let n1 = 0;
    let n2 = 0;
 // declarei a função e coloquei duas variáveis.
    n1 = Number(window.prompt('Digite um número:'));
    n2 = Number(window.prompt('Digite outro número:'));
    let soma = n1 + n2 
    alert(soma);
// declarei uma função para cada e coloquei o calculo da soma delas.
    if(soma >= 10){
        alert("O resultado é maior que 10");
 } else {
        alert("Não é maior que 10")
 }
   // mostra se se o resultado é maior que 0 ou não.
}
