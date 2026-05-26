// ex 1
document.getElementById("curso-1").textContent = "Introdução à Programação";
document.getElementById("curso-2").textContent = "Design de Interfaces";

// ex 2
document.querySelector("#card-1 .text-card").textContent = "Uma breve introdução à Programação Web";
document.querySelector("#card-2 .text-card").textContent = "Criando interfaces amigáveis com HTML e CSS";

// ex 3
let img = document.querySelector(".img-mode");
let modo = "off";

img.addEventListener("click", function() {
    if (modo == "off") {
        img.src = "img/dark-mode-on.png";
        modo = "on";
    } else {
        img.src = "img/dark-mode-off.png";
        modo = "off";
        mudarCores();
    }
});

// ex. 4
let botao1 = document.querySelector("#card-1 button");
let card1 = document.getElementById("card-1");

botao1.addEventListener("click", function() {
    if (botao1.textContent == "Selecionar") {
        card1.style.borderColor = "red";
        botao1.textContent = "Selecionado";
    } else {
        card1.style.borderColor = "gray";
        botao1.textContent = "Selecionar";
    }
});

let botao2 = document.querySelector("#card-2 button");
let card2 = document.getElementById("card-2");

botao2.addEventListener("click", function() {
    if (botao2.textContent == "Selecionar") {
        card2.style.borderColor = "red";
        botao2.textContent = "Selecionado";
    } else {
        card2.style.borderColor = "gray";
        botao2.textContent = "Selecionar";
    }
});

// ex. 5
let cards = document.querySelectorAll(".card");
let h1 = document.createElement("h1");
h1.textContent = "Cursos Ativos: " + cards.length;
document.body.insertBefore(h1, document.querySelector(".main-content"));

// EX 6
function mudarCores() {
    document.body.style.backgroundColor = "#171010";
    document.querySelector(".nav-bar").style.backgroundColor = "#362222";
    card1.style.backgroundColor = "#423F3E";
    card2.style.backgroundColor = "#334756";

    h1.style.color = "white";
    document.querySelector(".home-link").style.color = "white";
    document.getElementById("curso-1").style.color = "white";
    document.getElementById("curso-2").style.color = "white";

    let h5s = document.querySelectorAll("h5");
    for (let i = 0; i < h5s.length; i++) {
        h5s[i].style.color = "white";
    }

    let textos = document.querySelectorAll(".text-card");
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.color = "white";
    }
}