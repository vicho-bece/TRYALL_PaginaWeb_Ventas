document.getElementById("solicitudForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
  
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const nombreProducto = document.getElementById("nombreProducto").value;
    const cantidad = document.getElementById("cantidad").value;
  
    // Realizar acciones con los datos ingresados
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Correo Electrónico:", correo);
    console.log("Nombre del Producto:", nombreProducto);
    console.log("Cantidad Solicitada:", cantidad);
    
  
    // Falta agregar info para enviar al servidor (V2)
  
    // Limpiar el formulario
    document.getElementById("solicitudForm").reset();
  });
  