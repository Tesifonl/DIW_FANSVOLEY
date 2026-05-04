function mostrarProductos(categoria, contenedorId) {
  const contenedor = document.getElementById(contenedorId);

  const productosFiltrados = productos.filter(
    producto => producto.categoria === categoria
  );

  contenedor.innerHTML = productosFiltrados
    .map(producto => crearTarjeta(producto))
    .join("");
}

mostrarProductos("entradas", "contenedor-entradas");
mostrarProductos("abonos", "contenedor-abonos");
mostrarProductos("equipamiento", "contenedor-equipamiento");