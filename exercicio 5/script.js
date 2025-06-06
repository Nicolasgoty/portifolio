    let ale = parseInt(Math.random() * 101);
    let comp = document.querySelector('#resultado');
    let jogador;
    // declarei 3 variáveis
function pensar(){;
 jogador = Number(window.prompt("digite um número de 1 a 100"));
 console.log(ale);
    // faz uma pergunta para o usuário digitar um número de 1 a 100 
 if( jogador != ale){

    comp.innerHTML = `<p> Você errou, continue tentando` 
    if( jogador > ale){
        comp.innerHTML = `<p> Você errou, continue tentando, mas tente um número MENOR!`
    }
    else{
        comp.innerHTML = `<p> Você errou, continue tentando, mas tente um número MAIOR!!`
    }
     }else{
    comp.innerHTML = `<p> Parabéns, você conseguiu!! Foram somente {tentativas}`
    }
    // mostra se o usuário acertou, se não acertou, pede para continuar

}