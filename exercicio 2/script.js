function calculo() {
    let ano = 0;
    let idade;
//declarei a função e coloquei duas variáveis.
    ano = Number(window.prompt('Digite seu ano de nascimento:'));
       idade = 2025 - ano;
    alert("sua idade é " + idade);
//declarei uma função para cada variável e coloquei o calculo para descobrir a idade.
       if( idade >18){
              alert("Você pode tirar a carteira")
       } else{
              let dif = 18 - idade;
       alert("Você ainda não pode tirar a carteira pois faltam " + dif + " para você ter 18 anos")
       }
       //mostra que se vc tem idade para tirar a carteira ou não e quanto tempo falta para ttirar ela.
}