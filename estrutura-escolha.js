// usaremos uma calculadora para demonstracao de estutura condicional
// utilizar o botão para iniciar a ação no htlm  -- function

function acaoBotao(){

    var valor01, valor02, operacao, resultado;
    
    valor01 = prompt("Digite o primeiro valor");
    
    operacao = prompt("Digite a operacao: Ex: '+, -, *, /' : ");
    
    valor02 = prompt("Digite o segundo valor");
    
    switch(operacao){
        case '+': 
            resultado = (parseInt(valor01) + parseInt(valor02));
            break;
        case '-':
            resultado = (parseInt(valor01) - parseInt(valor02));
            break;
        case '*':
            resultado = (parseInt(valor01) * parseInt(valor02));
            break;
        case '/':
            resultado = (parseInt(valor01) / parseInt(valor02));
            break;
        default: 
            document.getElementById("paragrafo").innerText = "Operacao nao reconhecida";
        break;
    }
    document.getElementById("paragrafo").innerText = "O resultado da operacao e: " + resultado;
    
    }
    
    