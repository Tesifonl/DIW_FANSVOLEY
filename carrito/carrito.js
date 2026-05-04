function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function añadirAlCarrito(producto) {
  const carrito = obtenerCarrito();

  const productoExistente = carrito.find(item => item.id === producto.id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      titulo: producto.titulo,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }

  guardarCarrito(carrito);
  actualizarResumenCarrito();
  mostrarNotificacion("Producto añadido correctamente al carrito.");
}

function actualizarResumenCarrito() {
  const carrito = obtenerCarrito();

  const contador = document.getElementById("contador-carrito");
  const resumen = document.getElementById("resumen-carrito");
  const totalResumen = document.getElementById("total-resumen");

  const cantidadTotal = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  const precioTotal = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  if (contador) {
    contador.textContent = cantidadTotal;
  }

  if (resumen) {
    resumen.innerHTML = carrito.length === 0
      ? `<p class="mb-0">El carrito está vacío.</p>`
      : carrito.map(item => `
          <div class="d-flex align-items-center gap-2 mb-2">
            <img src="${item.imagen}" alt="${item.titulo}">
            
            <div class="flex-grow-1">
              <p class="mb-0 small fw-bold">${item.titulo}</p>
              <p class="mb-0 small text-muted">
                ${item.cantidad} x ${item.precio.toFixed(2)} €
              </p>
            </div>
          </div>
        `).join("");
  }

  if (totalResumen) {
    totalResumen.textContent = `${precioTotal.toFixed(2)} €`;
  }
}

function mostrarNotificacion(mensaje) {
  const notificacion = document.createElement("div");

  notificacion.className = "alert alert-success position-fixed top-0 end-0 m-3";
  notificacion.style.zIndex = "3000";
  notificacion.textContent = mensaje;

  document.body.appendChild(notificacion);

  setTimeout(() => {
    notificacion.remove();
  }, 3000);
}

function cambiarCantidad(id, incremento) {
  const carrito = obtenerCarrito();

  const producto = carrito.find(item => item.id === id);

  if (!producto) return;

  producto.cantidad += incremento;

  if (producto.cantidad <= 0) {
    producto.cantidad = 1;
  }

  guardarCarrito(carrito);
  actualizarResumenCarrito();

  if (typeof renderizarCarrito === "function") {
    renderizarCarrito();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarResumenCarrito();

  const btnCarrito = document.getElementById("btn-carrito");
  const panelCarrito = document.getElementById("panel-carrito");

  if (btnCarrito && panelCarrito) {
    btnCarrito.addEventListener("click", () => {
      panelCarrito.classList.toggle("abierto");
    });
  }
});