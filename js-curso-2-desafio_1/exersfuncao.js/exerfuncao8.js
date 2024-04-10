let num = parseInt(prompt("Digite um número:"));
let multiplicao = gerarMultiplicacao();

alert(`O resultado é igual a ${multiplicao}`);

function gerarMultiplicacao(multiplicao){
    return num*num;
}