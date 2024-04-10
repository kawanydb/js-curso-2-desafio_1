let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

function clicarBotao(){
    console.log("O botão foi clicado.");

}

function clicarAlert(){
    alert ("Eu amo JS!");
}

function clicarPrompt(){
    let resposta = prompt("Insira uma cidade brasileira:");
    alert(`Eu estive em ${resposta} e lembrei de você!`);
}
