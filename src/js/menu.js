const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");
const icone = document.querySelector(".icon");
botao.addEventListener("click", function (event) {
  event.preventDefault();
  linksMenu.classList.toggle("open");

  if (linksMenu.classList.contains("open")) {
    icone.innerHTML = "&times;";
  } else {
    icone.innerHTML = "&equiv;";
  }
});
