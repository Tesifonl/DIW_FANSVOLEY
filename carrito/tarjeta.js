function crearTarjeta(producto) {
  return `
    <article class="col-md-4">
      <div class="card h-100 shadow-sm card-hover">
        <img src="${producto.imagen}"
             class="card-img-top"
             alt="${producto.alt}">

        <div class="card-body">
          <h3 class="card-title h5">${producto.titulo}</h3>
          <p class="card-text">${producto.descripcion}</p>
          <p class="fw-bold">${producto.precio} €</p>

          <a href="${producto.enlace}" class="btn btn-primary">
            Ver producto
          </a>
        </div>
      </div>
    </article>
  `;
}
