function accepted() {
  document.querySelector("section").style.display = "none";

  const animacao = document.getElementById("animacao");
  animacao.style.display = "block";
}

function newPosition(min, max) {
  return Math.random() * (max - min) + min + "%";
}

function declined(btn) {
  // btn declarado na função
  btn.style.position = "absolute";

  let newBottom = newPosition(10, 80, 10); // Evita o topo
  let newLeft = newPosition(10, 80, 10); // Evita o lado extremo

  btn.style.bottom = newBottom;
  btn.style.left = newLeft;

  console.log("ops......");
}
