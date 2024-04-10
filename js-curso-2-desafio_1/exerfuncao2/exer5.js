let numero = parseInt(prompt("Digite um número de 1 a 10:"));

function calculoTabuada (parNumero){
    for ( let i= 1; i<=10; i++){
        let resultado = parNumero*1;
        parNumero*1;
        console.log (`${parNumero} x ${i}`);
    }
}
calculoTabuada(numero);