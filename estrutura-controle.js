//Lê e imprime nome e idade

var nome, nota1, nota2;

nome = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a primeira nota do aluno: ");
nota2 = prompt("Digite a segunda nota do aluno: ");

// parseInt transforma a variavel em inteira
media = (parseInt(nota1) + parseInt(nota2))/2;

if(media >= 5){
    alert("O aluno " + nome + " foi aprovado com a media: " + media);
}
else
    alert("O aluno " + nome + " foi reprovado com a media: " + media);