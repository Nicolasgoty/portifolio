let aleatorio = parseInt(Math.random() * 101)
let mostraresultado = document.querySelector('#resultado');
let jogador;
let tent = 0;

function pensar() {
    jogador = Number(window.prompt("Digite um número entre 1 a 100"))
    
    if(jogador > 0 && jogador <101) {

        tent += 1;
    
       if (jogador != aleatorio) {
        if(jogador > aleatorio) {
                mostraresultado.innerHTML +=  `<p><b> TENTATIVA ${tent}:</b> Você tentou o número <b>${jogador}</b>, tente um NUMERO <b>MENOR</b>`;
        } else {
                mostraresultado.innerHTML +=  `<p><b> TENTATIVA ${tent}:</b>Voce tentou o número <b>${jogador}</b>, tente um NUMERO <b>MAIOR</b>`;
        }
       } else {
        mostraresultado.innerHTML += `<p><b>Parabéns você acertou ${aleatorio} em ${tent} tentativas</b></p>`;
       }
         }else { alert("Por favor, digite um número entre 1 e 100.");
}
}