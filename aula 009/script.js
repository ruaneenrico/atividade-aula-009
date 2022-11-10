// tipos de funções
// função declarativa
/* deve ser declarada usando a palavra reservada fuction seguida
do nome da função, parênteses "()" e chaves "{}"*/
function nomeDaFuncao() {
    alert('sou uma função declarativa');
}
// devemos chamar a função para ver o resultado
nomeDaFuncao();

// expressão de função - são funções atribuidos à expressões
// a nomeação é opcional

// com nomeação
var nomeDeFuncao = function nomeDaFuncao() {
    alert('sou uma expressão de função nomeada!');
}
// sem nomeação
var nomeDefuncao2 = function() {
    alert('sou uma expressão de função não nomeada!');
}
    // arrow function
/* função de expressão de sintaxe curta, sempre anônima,
não pode ser nomeada - deve ser declarada com parênteses "()",
seguida de "=>" e depois "()"*/
var funcao = () =>{
    alert('sou uma função anônima!');
}

nomeDeFuncao();
nomeDefuncao2();
funcao();