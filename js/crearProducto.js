const apiURL = 'http://localhost:3000/productos'; 
async function agregarProducto(producto) {
  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const nuevoProducto = await response.json();
    obtenerProductos(); 
  } catch (error) {
    console.error('Hubo un problema con la operación fetch:', error);
  }
}

document.querySelector('#botonAgregarProducto').addEventListener('click', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombreNuevoProducto').value;
  const precio = parseFloat(document.querySelector('#precioNuevoProducto').value);
  const imagen = document.querySelector('#imagenNuevoProducto').value;

  if (nombre && precio && imagen) {
    const nuevoProducto = { nombre, precio, imagen };
    agregarProducto(nuevoProducto);
  } else {
    alert('Por favor, completa todos los campos del formulario.');
  }
});

document.getElementById("botonAgregarProducto").addEventListener("click", async function() {
    // Capturar los valores del nuevo producto desde el formulario
    const nombre = document.getElementById("nombreNuevoProducto").value;
    const precio = document.getElementById("precioNuevoProducto").value;
    const imagen = document.getElementById("imagenNuevoProducto").value;

    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen
    };

    const nuevoCard = document.createElement("div");
    nuevoCard.classList.add("card");
    nuevoCard.innerHTML = `
        <img src="${imagen}" />
        <div class="card-container--info">
            <p id="nombre">${nombre}</p>
            <div class="card-container--value">
                <p id="precio">$ ${precio}</p>
                <img src="/img/Vector.svg" class="papelera" /> <!-- Puedes usar una clase en lugar de un ID para el icono de eliminar -->
            </div>
        </div>
    `;

    document.querySelector(".imagenes_line").appendChild(nuevoCard);

    document.getElementById("nombreNuevoProducto").value = "";
    document.getElementById("precioNuevoProducto").value = "";
    document.getElementById("imagenNuevoProducto").value = "";
});
