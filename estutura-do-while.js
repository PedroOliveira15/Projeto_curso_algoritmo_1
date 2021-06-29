

function acaoBotao(){

    var sairloop, valor01, valor02, resultado;

    do {
        valor01 = prompt("Digite o primeiro valor: ");
        valor02 = prompt("Digite o segundo valor: ");
        resultado = parseInt(valor01) + parseInt(valor02);
        document.getElementById("paragrafo").innerText = "resultado e: " + resultado;

        sairloop = prompt("Deseja sair? S/N: ");
        

    } while (sairloop == "N");

}