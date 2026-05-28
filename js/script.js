function tirarFoto() {
    alert("Foto registrada com sucesso!");
    window.location.href = "fluxo3_pasta.html";
}

function validar(event) {
    event.preventDefault();

    var validade = document.getElementById("validade").value;
    var custo = document.getElementById("custo").value;
    var quantidade = document.getElementById("quantidade").value;

    if (validade == "" || custo == "" || quantidade == "") {
        alert("Preencha todos os campos antes de confirmar.");
        return;
    }

    window.location.href = "fluxo1_confirmado.html";
}
