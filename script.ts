const input = document.querySelector("#inputTarefa") as HTMLInputElement;
const botao = document.querySelector("#botaoAdicionar") as HTMLButtonElement;
const lista = document.querySelector("#lista") as HTMLUListElement;

botao.addEventListener("click", () => {
  const texto = input.value;

  const item = document.createElement("li");

  item.textContent = texto;

  lista.appendChild(item);

  input.value = "";
  input.focus();
});
