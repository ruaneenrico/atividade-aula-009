// criando uma calculadora
function calculadora(){
    //definido as operações e pegando valor de entrada do usuário
    //usaremos o "\n"
    const operacao = Number(prompt('escolha uma opção:\n 1 - soma (+)\n 2 - subtração (*)\n 4 - divisão real(/)\n 5 - divisão inteira (%)\n 6 - potenciacão'));

    //verificando se a operação é válida
    if (!operacao || operacao >=7){
        alert('Erro - operação inválida!');
        calculadora();
    } else{
        //definido variáveis - todas as entradas devem ser tipo number
        let n1 = Number(prompt('inspira o primeiro valor:'));
        let n2 = Number(prompt('inspira o segundo valor:'));
        let resultado;
        //verificando se as variáveis são válidas
        if(!n1 || !n2) {
            alert('erro - parâmetros invalidos!');
            calculadora();
        } else {
            //definido as funções 
            function soma() {
                resultado = n1 + n2;
                //mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                //dando a opção de chmar uma nova operação
                novaOperacao();
            }
            function subtracao() {
            resultado = n1 - n2;
            //mostrando o resultado usando template strings
            alert(`${n1} - ${n2} = ${resultado}`);
            //dando a opção de chmar uma nova operação
            novaOperacao();

            }
            function multiplicacao() {
                resultado = n1 * n2;
                //mostrando o resultado usando template strings
                alert(`${n1} * ${n2} = ${resultado}`);
                //dando a opção de chmar uma nova operação
                novaOperacao();
            
            }
            function divisaoReal() {
                resultado = n1 / n2;
                //mostrando o resultado usando template strings
                alert(`${n1} / ${n2} = ${resultado}`);
                //dando a opção de chmar uma nova operação
                novaOperacao();
            
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                //mostrando o resultado usando template strings
                alert(`${n1} % ${n2} = ${resultado}`);
                //dando a opção de chmar uma nova operação
                novaOperacao();
            
            }
            function potenciacao() {
                resultado = n1 ** n2;
                //mostrando o resultado usando template strings
                alert(`${n1} elevado à ${n2}ª potencia é = ${resultado}`);
                //dando a opção de chmar uma nova operação
                novaOperacao();
            }
            //nova operação
            function novaOperacao(){
                let opcao = prompt('deseja fazer outra operação?\n 1 - sim\n 2 - não');
                if (opcao == 1){
                    calculadora();
                }else if (opcao == 2){
                    alert('até mais!');
                }else{
                    alert('digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    }

    // escolhendo uma operação
    //usando if && else
    if (operacao == 1 ) {
        soma();
    }else if (operacao == 2) {
        subtracao();
    }else if (operacao == 3) {
        multiplicacao();
    }else if (operacao == 4 ) {
        divisaoReal();
    }else if (operacao == 5) {
        divisaoInteira();
    }else if(operacao == 6) {
       potenciacao     
    }
            
    // usando switch case como alternativa (comentar um dos dois)
    /*
    switch (operacacao) {
    case 1:
        soma(); 
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisaoReal();
    case 5:
        divisaoInteira();
        break
    case 6:
        potenciacao();
        break:
    } */
 }   
calculadora();