var input = document.querySelector("#inputTarefa");
var botao = document.querySelector("#botaoAdicionar");
var lista = document.querySelector("#lista");
botao.addEventListener("click", function () {
    var texto = input.value;
    var item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);
    input.value = "";
    input.focus();
});
