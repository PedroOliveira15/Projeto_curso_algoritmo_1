//Lê e imprime nome e idade

var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a primeira nota do aluno: ");
nota2 = prompt("Digite a segunda nota do aluno: ");

// parseInt transforma a variavel em inteira e usa para SOMA, se não iria concatenar
media = (parseInt(nota1) + parseInt(nota2))/2;

if(media >= 5){
    passou = true;
}

// para utilizar negação precede com ! antes da variavel
// conjução if(passou && media>=70)
// disjunção if(passou || media>=70) - OU
// disjução exclusiva if((passou) && (media >= 50|| media<=70))
if(passou){
    alert("O aluno " + nome + " foi aprovado com a media: " + media);
}
else
    alert("O aluno " + nome + " foi reprovado com a media: " + media);