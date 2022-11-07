document.addEventListener("DOMContentLoaded", ativarMenu);
function ativarMenu() {
  const body = document.querySelector(".body");
  const navbar = document.querySelector(".navbar");
  const burguer = document.querySelector(".navbar-direita__burguer");

  burguer.addEventListener("click", () => {
    body.classList.toggle("sem-overflow");
    navbar.classList.toggle("show");
  });
}
