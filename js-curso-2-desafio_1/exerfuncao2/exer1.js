let peso = parseFloat(prompt("Informe seu peso?"));
let altura = parseFloat(prompt("Informe sua altura"));
let imc;
function calculoIMC(parPeso, parAltura){
    return parPeso/(parAltura*parAltura);
}
imc = calculoIMC(peso,altura);
alert (`O valor de seu IMC é ${imc.toFixed(2)}.`);