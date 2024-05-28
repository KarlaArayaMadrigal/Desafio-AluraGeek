
// URL de la API o endpoint donde se obtendrán los productos
const apiURL = 'http://localhost:3000/productos';

// Función asíncrona para obtener productos
async function obtenerProductos() {
  try {
    // Realiza la solicitud GET
    const response = await fetch(apiURL);

    // Verifica si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    // Convierte la respuesta a formato JSON
    const productos = await response.json();

    // Llama a la función para mostrar los productos en el DOM
    mostrarProductos(productos);
  } catch (error) {
    console.error('Hubo un problema con la operación fetch:', error);
  }
}

function mostrarProductos(productos) {
  const listaProductos = document.querySelector('.misProductos .imagenes_line');
  listaProductos.innerHTML = ''; 

  productos.forEach(producto => {
    const productoHTML = `
      <div class="card">
        <img id="imagen" src="${producto.imagen}" alt="${producto.nombre}" />
        <div class="card-container--info">
          <p id="nombre">${producto.nombre}</p>
          <div class="card-container--value">
            <p id="precio">$ ${producto.precio}</p>
            <img src="/img/Vector.svg" id="papelera" />
          </div>
        </div>
      </div>
    `;

    listaProductos.insertAdjacentHTML('beforeend', productoHTML);
  });
}

document.addEventListener('DOMContentLoaded', obtenerProductos);

