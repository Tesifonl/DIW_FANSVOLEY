document.addEventListener("keydown", function (event) {
  // Atajo personalizado: Alt + I => ir arriba
  if (event.altKey && event.key.toLowerCase() === "i") {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});