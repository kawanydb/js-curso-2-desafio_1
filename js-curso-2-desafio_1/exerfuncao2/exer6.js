let raio = parseFloat(prompt("Digite o raio do círculo:"));
let pi = 3.14;
let area;
let perimetro;
function perimetroCirculo (xRaio){
    return (2*pi*xRaio);
}
perimetro = perimetroCirculo(raio);
alert (`O perímetro do círculo é ${perimetro.toFixed(2)}`);

function areaCirculo (xRaio){
    return 3.14*(xRaio**2);
}
area = areaCirculo (raio);
alert (`A área do círculo é ${area.toFixed(2)}`);