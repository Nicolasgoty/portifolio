function contar() {
        let numero = document.getElementById(`resultado`);
        let contador = 1;
        let saida = "";
// declarei uma função e 3 variáveis.
    numero =window.prompt("Digite um número de 1 a 10");
    if (isNaN(numero)) {
        saida = "<p>Por favor, digite um número válido.</p>";
    } else {
    while (contador <= 10) {
        saida += `${numero} x ${contador} = ${numero * contador}<br>`;
        contador++;
        // pergunta um número de 1 a 10, se for um número real, ele mostra a tabuada desse número, se não, ele pede para colocar outro numero.
}
}

    resultado.innerHTML = saida;
    //mostra na tela.
    }
