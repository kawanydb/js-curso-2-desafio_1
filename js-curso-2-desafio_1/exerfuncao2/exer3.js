let dolar = parseFloat(prompt("Qual o valor?"))
let real =  transformarReal(parDolar);
let resultado;
function transformarReal(parDolar){
    return parDolar/4.80
}
resultado= transformarReal(dolar);
alert (`A transferência do ${dolar} para reais é igual à ${real.toFixed(2)}`);