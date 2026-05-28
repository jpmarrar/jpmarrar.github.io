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

function desenharGrafico() {
    var canvas = document.getElementById("grafico-inicio");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var meses = ["Dez", "Jan", "Fev", "Mar", "Abr", "Mai"];
    var valores = [870, 950, 1020, 890, 980, 1105];

    var largura = canvas.width;
    var altura = canvas.height;
    var padH = 10;
    var padBottom = 20;
    var padTop = 10;
    var maxValor = Math.max.apply(null, valores);
    var larguraBarra = (largura - padH * 2) / meses.length;
    var espaco = larguraBarra * 0.3;

    ctx.clearRect(0, 0, largura, altura);

    for (var i = 0; i < meses.length; i++) {
        var altBarra = Math.floor(valores[i] / maxValor * (altura - padBottom - padTop));
        var x = Math.floor(padH + i * larguraBarra + espaco / 2);
        var y = altura - padBottom - altBarra;
        var w = Math.floor(larguraBarra - espaco);

        ctx.fillStyle = (i === meses.length - 1) ? "#2ecc71" : "#0a1f44";
        ctx.fillRect(x, y, w, altBarra);

        ctx.fillStyle = "#999999";
        ctx.font = "9px Arial";
        ctx.textAlign = "center";
        ctx.fillText(meses[i], x + w / 2, altura - 4);
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

desenharGrafico();
