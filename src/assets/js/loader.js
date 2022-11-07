const loaderContainer = document.querySelector(".loader-container");
const conteudo = document.querySelector(".conteudo");

window.addEventListener("load", () => {
  loaderContainer.remove();
  conteudo.classList.add("visivel");
});
