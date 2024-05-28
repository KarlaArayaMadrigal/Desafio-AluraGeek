async function listarProductos(){
    const conexion = await fetch('http://localhost:3000/productos');

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

//export conexionAPI = {
  //  listarProductos;
//}