// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

//Selecionar classe frases
const frases = document.querySelectorAll(".mensagem2")

// Selecionando o botão que altera as frases
const mudarFrases = document.getElementById("btn-mudar-frases");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
  title.style.textAlign  = "center";
});
//evento clique alterar frases
mudarFrases.addEventListener("click", function () {
  frases.forEach(frases => {
    frases.textContent = "Class modificada";
    frases.style.color = '#0a071d';
    
  })
});