let productoAEliminar = null;

function renderizarCarrito() {
  const carrito = obtenerCarrito();
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total-carrito");

  if (!lista || !total) return;

  if (carrito.length === 0) {
    lista.innerHTML = "<p>El carrito está vacío.</p>";
    total.textContent = "0 €";
    return;
  }

  lista.innerHTML = carrito.map(item => `
    <article class="card shadow-sm mb-3">

      <div class="card-body">

        <div class="row align-items-center g-3">

          <div class="col-12 col-sm-4 col-md-3 text-center">
            <img src="${item.imagen}"
                 class="img-fluid rounded"
                 style="max-height:120px; object-fit:contain;"
                 alt="${item.titulo}">
          </div>

          <div class="col-12 col-sm-8 col-md-3">
            <h2 class="h5 mb-1">${item.titulo}</h2>

            <p class="text-muted mb-0">
              ${item.precio.toFixed(2)} €
            </p>
          </div>

          <div class="col-6 col-md-2">
            <span class="text-muted small d-block">
              Cantidad
            </span>

            <div class="d-flex align-items-center gap-2 mt-1">
              <button class="btn btn-sm btn-outline-secondary"
                      onclick="cambiarCantidad(${item.id}, -1)"
                      aria-label="Disminuir cantidad de ${item.titulo}">
                -
              </button>

              <strong>${item.cantidad}</strong>

              <button class="btn btn-sm btn-outline-secondary"
                      onclick="cambiarCantidad(${item.id}, 1)"
                      aria-label="Aumentar cantidad de ${item.titulo}">
                +
              </button>
            </div>
          </div>

          <div class="col-6 col-md-2">
            <span class="text-muted small d-block">
              Subtotal
            </span>

            <strong>
              ${(item.precio * item.cantidad).toFixed(2)} €
            </strong>
          </div>

          <div class="col-12 col-md-2 text-md-end">
            <button class="btn btn-danger btn-sm w-100"
                    onclick="prepararEliminacion(${item.id})">
              Eliminar
            </button>
          </div>

        </div>

      </div>

    </article>
  `).join("");

  const totalCarrito = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  );

  total.textContent = `${totalCarrito.toFixed(2)} €`;
}

function prepararEliminacion(id) {
  productoAEliminar = id;

  const modal = new bootstrap.Modal(
    document.getElementById("modalEliminar")
  );

  modal.show();
}

function confirmarEliminacion() {
  let carrito = obtenerCarrito();

  carrito = carrito.filter(item => item.id !== productoAEliminar);

  guardarCarrito(carrito);
  renderizarCarrito();
  actualizarResumenCarrito();

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalEliminar")
  );

  modal.hide();
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();

  document
    .getElementById("btn-confirmar-eliminar")
    .addEventListener("click", confirmarEliminacion);
});