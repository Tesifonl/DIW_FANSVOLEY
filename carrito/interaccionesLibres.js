function activarLeerMas() {
  const boton = document.getElementById("btn-leer-mas");
  const textoExtra = document.getElementById("texto-extra");

  if (!boton || !textoExtra) return;

  boton.addEventListener("click", () => {
    textoExtra.classList.toggle("d-none");

    boton.textContent = textoExtra.classList.contains("d-none")
      ? "Leer más"
      : "Leer menos";
  });
}

function activarInfoExtra() {
  const boton = document.getElementById("btn-info-extra");
  const info = document.getElementById("info-extra-producto");

  if (!boton || !info) return;

  boton.addEventListener("click", () => {
    info.classList.toggle("d-none");

    boton.textContent = info.classList.contains("d-none")
      ? "Mostrar información extra"
      : "Ocultar información extra";
  });
}

function activarValoracion() {
  const estrellas = document.querySelectorAll(".estrella");
  const resultado = document.getElementById("resultado-valoracion");

  if (!estrellas.length || !resultado) return;

  estrellas.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      const valor = index + 1;

      estrellas.forEach((e, i) => {
        e.textContent = i < valor ? "★" : "☆";
      });

      resultado.textContent = `Has valorado este producto con ${valor} estrella(s).`;
    });
  });
}