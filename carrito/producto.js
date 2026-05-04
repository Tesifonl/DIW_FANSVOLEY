const parametros = new URLSearchParams(window.location.search);
const idProducto = Number(parametros.get("id"));

const producto = productos.find(p => p.id === idProducto);

const contenedor = document.getElementById("detalle-producto");

if (producto) {
  contenedor.innerHTML = `
    <section class="card border-0 shadow-sm">
      <div class="row g-0">

        <div class="col-12 col-lg-6 bg-light d-flex align-items-center justify-content-center p-4">
          <img src="${producto.imagen}"
               class="img-fluid rounded"
               style="max-height: 420px; object-fit: contain;"
               alt="${producto.alt}">
        </div>

        <div class="col-12 col-lg-6">
          <div class="card-body p-4 p-md-5">

            <span class="badge bg-primary mb-3 text-capitalize">
              ${producto.categoria}
            </span>

            <h1 class="card-title display-6 fw-bold">
              ${producto.titulo}
            </h1>

            <p class="card-text lead">
              ${producto.descripcion}
            </p>

            <p id="texto-extra" class="d-none">
              Este producto está pensado para personas aficionadas al voleibol que buscan una compra sencilla, rápida y segura.
            </p>

            <button id="btn-leer-mas"
                    class="btn btn-link px-0">
              Leer más
            </button>

            <div class="mt-3">
              <button id="btn-info-extra"
                      class="btn btn-outline-secondary btn-sm">
                Mostrar información extra
              </button>

              <div id="info-extra-producto"
                   class="alert alert-info mt-3 d-none">
                <p class="mb-1"><strong>Disponibilidad:</strong> Disponible.</p>
                <p class="mb-1"><strong>Entrega:</strong> Recogida en taquilla o envío digital.</p>
                <p class="mb-0"><strong>Garantía:</strong> Compra protegida por FansVoley.</p>
              </div>
            </div>

            <div class="mt-4">
              <h2 class="h5">Valora este producto</h2>

              <button class="estrella btn btn-link fs-3 p-0" type="button">☆</button>
              <button class="estrella btn btn-link fs-3 p-0" type="button">☆</button>
              <button class="estrella btn btn-link fs-3 p-0" type="button">☆</button>
              <button class="estrella btn btn-link fs-3 p-0" type="button">☆</button>
              <button class="estrella btn btn-link fs-3 p-0" type="button">☆</button>

              <p id="resultado-valoracion" class="mt-2 text-muted">
                Aún no has valorado este producto.
              </p>
            </div>

            <p class="fs-3 fw-bold mt-4">
              ${producto.precio.toFixed(2)} €
            </p>

            <div class="d-grid gap-2 d-sm-flex">
              <button id="btn-añadir-carrito"
                      class="btn btn-primary btn-lg">
                Añadir al carrito
              </button>

              <a href="buscar.html"
                 class="btn btn-outline-secondary btn-lg">
                Volver a búsqueda
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;

  const botonAñadir = document.getElementById("btn-añadir-carrito");

  botonAñadir.addEventListener("click", () => {
    añadirAlCarrito(producto);

    setTimeout(() => {
      window.location.href = "carrito.html";
    }, 1000);
  });

  activarLeerMas();
  activarInfoExtra();
  activarValoracion();

} else {
  contenedor.innerHTML = `
    <div class="alert alert-warning">
      No se ha encontrado el producto seleccionado.
    </div>
  `;
}