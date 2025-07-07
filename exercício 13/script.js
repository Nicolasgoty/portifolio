function somar(){

        let numeros = [];
        while (true) {
            let numero = prompt("Digite um número (0 para parar):");
            if (numero === "0") break;
            numeros.push(Number(numero));
        }
        
        if (numeros >= 0) {
            let soma = numeros;
            let media = soma / numeros;
            document.getElementById('resultado').innerHTML = `A soma destes números é: ${soma} <br> A média destes números é: ${media}`;
        } else {
            document.getElementById('resultado').innerHTML = "Nenhum número foi digitado.";
        }

        }