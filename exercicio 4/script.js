function media() {
    let n1 = Number(window.prompt("Digite a 1° nota"));
    let n2 = Number(window.prompt("Digite a 2° nota"));
    let n3 = Number(window.prompt("Digite a 3° nota"));
    let nota = (n1 + n2 + n3) / 3;
    //declarei 4 variáveis, as 3 primeiras são dos números e a ultima faz o cálculo.

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p> O resultado é ${nota.toFixed(1)}</p>`;
    console.log(resultado);
    // mostra o resultado na tela.

     if( nota >60){
              resultado = document.querySelector('#resultado');
              resultado.innerHTML = `<p> Você foi aprovado com ${nota.toFixed(1)}. Parabéns!!🎆🎆</p>`
              console.log("Você foi aprovado");
       } else{
         let dif = 60 - nota;
              resultado = document.querySelector('#resultado');
              resultado.innerHTML = `<p> Você foi reprovado com ${nota.toFixed(1)} e faltam ${dif.toFixed(1)} pontos.😢</p>`;
           
       }
     //mostra o resultado da conta já falando se você foi aprovado ou não.
}