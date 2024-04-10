let num1 = parseInt(prompt("Insira o primeiro número:"));
let num2 = parseInt(prompt("Insira o segundo número"));
let num3 = parseInt(prompt("Insira o terceiro número"));
let media = gerarMedia();

alert(`A média é ${media.toFixed(2)}`);

function gerarMedia(media) {
    return (num1 + num2 + num3)/3
}