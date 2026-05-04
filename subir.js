const boton = document.getElementById("btnSubir");

// Mostrar botón cuando no estás arriba del todo
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
});

// Subir suavemente al hacer clic
boton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});