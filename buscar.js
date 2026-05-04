
function mostrarTab(id, boton) {
  const contenidos = document.querySelectorAll('.contenido-tab');
  const tabs = document.querySelectorAll('.tab');

  contenidos.forEach(c => c.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  boton.classList.add('active');
}