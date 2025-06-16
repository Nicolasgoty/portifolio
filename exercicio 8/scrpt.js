
function verificarEstacao() {
    let mes = window.prompt("Digite o mês que você nasceu:");

    mes = mes.toUpperCase();

    let estacao = "";
// declarei a função e 2 lets.
   
    if (mes == "DEZEMBRO" || mes == "JANEIRO" || mes == "FEVEREIRO") {
        estacao = "Verão";
        document.body.style.backgroundColor = "#FFD800"; 
    } else if (mes == "MARÇO" || mes == "ABRIL" || mes == "MAIO") {
        estacao = "Outono";
        document.body.style.backgroundColor = "#FF4500"; 
    } else if (mes == "JUNHO" || mes == "JULHO" || mes == "AGOSTO") {
        estacao = "Inverno";
        document.body.style.backgroundColor = "#000080"; 
    } else if (mes == "SETEMBRO" || mes == "OUTUBRO" || mes == "NOVEMBRO") {
        estacao = "Primavera";
        document.body.style.backgroundColor = "#228B22"; 
    } else {
        alert("Mês inválido. Tente novamente.");
        return;
    }
// pergunta qual mês você nasceu e com essa resposta mostra em qual estação o usuário nasceu.
    alert(`você pertence ao ${mes} e à estação: ${estacao}`);
    document.getElementById("resultado").innerHTML = `<p>O mês de ${mes} pertence à estação: ${estacao}</p>`;
//mostra na tela toda a resposta.
}