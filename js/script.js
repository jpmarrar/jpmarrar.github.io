function tirarFoto() {
    alert("Foto registrada com sucesso!");
    window.location.href = "fluxo3_pasta.html";
}

function filtrarProdutos() {
    var termo = document.getElementById("busca").value.toLowerCase();
    var itens = document.querySelectorAll("main ul li");
    for (var i = 0; i < itens.length; i++) {
        var texto = itens[i].textContent.toLowerCase();
        if (texto.indexOf(termo) >= 0) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
}

function validar(event) {
    event.preventDefault();

    var campos = ["validade", "custo", "quantidade"];
    var valido = true;

    for (var i = 0; i < campos.length; i++) {
        var id = campos[i];
        var campo = document.getElementById(id);
        var msg = document.getElementById("erro-" + id);

        if (campo.value.trim() == "") {
            campo.classList.add("erro");
            if (msg) msg.style.display = "block";
            valido = false;
        } else {
            campo.classList.remove("erro");
            if (msg) msg.style.display = "none";
        }
    }

    if (valido) {
        window.location.href = "fluxo1_confirmado.html";
    }
}

function incrementarContador() {
    var total = parseInt(sessionStorage.getItem("totalAdicionado") || "0");
    total++;
    sessionStorage.setItem("totalAdicionado", total);
    var el = document.getElementById("contador-sessao");
    if (el) {
        el.textContent = "Total adicionado nesta sessão: " + total + " produto(s)";
    }
}

function marcarAbaAtiva() {
    var links = document.querySelectorAll("footer a");
    var caminho = window.location.pathname;
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("href");
        if (href && href !== "#" && caminho.indexOf(href) >= 0) {
            links[i].classList.add("ativo");
        }
    }
}

marcarAbaAtiva();

var buscaEl = document.getElementById("busca");
if (buscaEl) {
    buscaEl.oninput = filtrarProdutos;
}

var contadorEl = document.getElementById("contador-sessao");
if (contadorEl) {
    incrementarContador();
}
