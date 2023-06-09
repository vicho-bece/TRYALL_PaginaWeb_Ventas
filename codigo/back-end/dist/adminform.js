document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var imagen = document.getElementById('imagen').value;

    // Crear el objeto de datos a enviar
    var data = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen
    };

    // revisar esto-> Realizar la solicitud de inserción mediante AJAX o Fetch API
    fetch('http://127.0.0.1:3000', { //Reemplazar con el link correspondiente
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        console.log('Producto agregado correctamente');
      } else {
        console.log('Error al agregar el producto');
      }
    })
    .catch(function(error) {
      console.log('Error en la solicitud:', error.message);
    });
  });
