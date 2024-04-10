let numero = parseInt(prompt("Digite um número"));
let resultado = 1;
function numFatorial(fatNumero){
    if(fatNumero == 0){
        return 1;
    }
    while (fatNumero!= 0){
        resultado*=fatNumero;
        fatNumero-=1; // -- também funciona
    }
    return resultado;
}
numFatorial(numero);
alert (`O fatorial do número ${numero} é igual a ${resultado}`);
