const apiURL = 'http://localhost:3000/productos';

async function obtenerProductos() {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const productos = await response.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error('Hubo un problema con la operación fetch:', error);
  }
}

function mostrarProductos(productos) {
  const listaProductos = document.querySelector('[data-lista] .imagenes_line');
  listaProductos.innerHTML = '';

  productos.forEach(producto => {
    const productoHTML = `
      <div class="card">
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <div class="card-container--info">
          <p>${producto.nombre}</p>
          <div class="card-container--value">
            <p>$ ${producto.precio.toFixed(2)}</p>
            <img src="/img/Vector.svg" alt="Eliminar" />
          </div>
        </div>
      </div>
    `;

    listaProductos.insertAdjacentHTML('beforeend', productoHTML);
  });
}

document.addEventListener('DOMContentLoaded', obtenerProductos);



document.addEventListener("DOMContentLoaded", function() {
    obtenerProductos();
  });
  
  async function obtenerProductos() {
    try {
      const response = await fetch("/productos.json");
      const data = await response.json();
      const productos = data.productos;
  
      const contenedorProductos = document.querySelector(".imagenes_line");
  
      productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.classList.add("imagen");
  
        const nombre = document.createElement("p");
        nombre.textContent = producto.nombre;
        nombre.classList.add("nombre");
  
        const precio = document.createElement("p");
        precio.textContent = `$ ${producto.precio}`;
        precio.classList.add("precio");
  
        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
  
        contenedorProductos.appendChild(card);
      });
    } catch (error) {
      console.error("Hubo un problema al obtener los productos:", error);
    }
  }

document.addEventListener("DOMContentLoaded", function() {
    obtenerProductos();
  });
  
  async function obtenerProductos() {
    try {
      const response = await fetch("/productos.json");
      const data = await response.json();
      const productos = data.productos;
  
      const contenedorProductos = document.querySelector(".imagenes_line");
  
      productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.classList.add("imagen");
  
        const nombre = document.createElement("p");
        nombre.textContent = producto.nombre;
        nombre.classList.add("nombre");
  
        const precio = document.createElement("p");
        precio.textContent = `$ ${producto.precio}`;
        precio.classList.add("precio");
  
        const papelera = document.createElement("img");
        papelera.src = "/img/eliminar.svg"; 
        papelera.alt = "Eliminar producto";
        papelera.classList.add("papelera");
        papelera.addEventListener("click", () => eliminarProducto(producto.id)); 
        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(papelera);
  
        contenedorProductos.appendChild(card);
      });
    } catch (error) {
      console.error("Hubo un problema al obtener los productos:", error);
    }
  }
  
  async function eliminarProducto(id) {
    try {
      const response = await fetch(`/productos/${id}`, {
        method: "DELETE"
      });
  
      if (response.ok) {
        console.log(`Producto con ID ${id} eliminado exitosamente`);
      } else {
        console.error("Error al eliminar el producto:", response.status);
      }
    } catch (error) {
      console.error("Hubo un problema al eliminar el producto:", error);
    }
  }

  document.getElementById("limpiar").addEventListener("click", function() {
    document.getElementById("nombreNuevoProducto").value = ""; 
    document.getElementById("precioNuevoProducto").value = ""; 
    document.getElementById("imagenNuevoProducto").value = ""; 
  });