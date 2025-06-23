let n1 = document.getElementById('resultado');
let n2 = 1;
function contar(){
    n1.innerHTML = `<P><i>Contando de 1 à 10</i></P>`;
    while(n2 <= 10){
        n1.innerHTML += `${n2},&#10132`;
        n2++;
     
    }
    n1.innerHTML += `&#x1F3C1`;
   
}