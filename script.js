function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome === "" || telefone === "") {
    var errorMessage = document.getElementsByClassName("error-message")[0];
    errorMessage.innerHTML = "Por favor, preencha todos os campos.";
    return;
    }

    var table = document.getElementById("contatos-body");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";

    var errorMessage = document.getElementsByClassName("error-message")[0];
    errorMessage.innerHTML = "";
}