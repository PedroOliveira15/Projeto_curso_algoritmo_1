// Demonstração de concatenacao

var nome, numero;

nome = prompt("Digite o seu nome: ");
numero = prompt("Digite o seu numero: ");

//Objeto dom. Vamos mostrar os resultados na página html
// Como colocamos o id no paragrafo vamos usar no script e com o inner text estamos colocando dentro da tag <p>
document.getElementById("paragrafo").innerText = nome + " : " + numero;