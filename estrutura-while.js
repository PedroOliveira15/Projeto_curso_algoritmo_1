// vamos uitlizar de exemplo while



function acaoBotao(){

var nome, idade, limite, contador;
limite = prompt("Digite quantas vezes deve se verificar a idade: ");
contador = 0;

    while (contador < limite) {
        nome = prompt("Digite o nome da pessoa: ");

        idade = prompt("Digite a idade de " + nome);

        if(idade > 18){
        document.getElementById("paragrafo").innerText = nome + ' e maior de idade';    

        } else{
        document.getElementById("paragrafo").innerText = nome + ' e menor de idade';
        }
        contador++;

    }
} 