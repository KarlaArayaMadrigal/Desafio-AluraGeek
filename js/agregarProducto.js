document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario');
    const nombreInput = document.getElementById('nombreNuevoProducto');
    const precioInput = document.getElementById('precioNuevoProducto');
    const imagenInput = document.getElementById('imagenNuevoProducto');
    const productList = document.querySelector('.imagenes_line');
    const botonAgregarProducto = document.getElementById('botonAgregarProducto');
    const limpiarButton = document.getElementById('limpiar');
  
    botonAgregarProducto.addEventListener('click', (e) => {
      e.preventDefault();
      const nombre = nombreInput.value;
      const precio = `$ ${parseFloat(precioInput.value).toFixed(2)}`;
      const imagen = imagenInput.value;
  
      if (nombre && precio && imagen) {
        const card = document.createElement('div');
        card.classList.add('card');
  
        card.innerHTML = `
          <img class="imagen" src="${imagen}" alt="${nombre}" />
          <div class="card-container--info">
            <p class="nombre">${nombre}</p>
            <div class="card-container--value">
              <p class="precio">${precio}</p>
              <img src="/img/Vector.svg" class="papelera" alt="Eliminar" />
            </div>
          </div>
        `;
  
        productList.appendChild(card);
  
        nombreInput.value = '';
        precioInput.value = '';
        imagenInput.value = '';
      } else {
        alert('Por favor, complete todos los campos.');
      }
    });
  
    limpiarButton.addEventListener('click', (e) => {
      e.preventDefault();
      nombreInput.value = '';
      precioInput.value = '';
      imagenInput.value = '';
    });
  
    productList.addEventListener('click', (e) => {
      if (e.target.classList.contains('papelera')) {
        e.target.closest('.card').remove();
      }
    });
  });
  