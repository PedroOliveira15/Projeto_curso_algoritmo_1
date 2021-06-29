// vamos uitlizar de exemplo fatorial para for

var numero, fatorial;

function acaoBotao(){
numero = prompt("Digite o valor para calcular o fatorial");
fatorial = 1;
for (var contador = 1; contador <= numero; contador++){
    //fatorial
    fatorial = parseInt(fatorial) * parseInt(contador);

} 
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " e: " + fatorial + "!";
}