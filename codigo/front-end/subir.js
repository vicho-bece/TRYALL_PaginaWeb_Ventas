$(document).ready(function(){
    $("#formulario").validate({
        rules:{
            nombre:{
                required:true
            },
            fabricante:{
                required:true
            },
            stock:{
                required:true
            },
            Codigo:{
                required:true
            },
            Precio:{
                required: true
            }
        },
        submitHandler: function(form){

            subirProductos();
        }

    })
});

function subirProductos(){
    Codigo=$("#Codigo").val();
            nombre=$("#nombre").val();
            fabricante=$("#fabricante").val();
            stock=$("#stock").val();
            Precio=$("#Precio").val();
            

            $.ajax({
            data: JSON.stringify({"Codigo":Codigo,"nombre":nombre,"fabricante":fabricante,"stock":stock, "Precio":Precio}),
            contentType: "application/json",
            type: "PUT",
            dataType: "json",
            url: "http://127.0.0.1:3000/subir",
            })
            .done(function(data){
                if(data.mensaje == false){
                    console.log("No se puede agregar el producto. El codigo se encuentra repetido:" + Codigo);
                    alert("No se puede agregar el producto. El codigo se encuentra repetido:" + Codigo);
                }
                else{
                    console.log("El producto se subio correctamente a la BD");
                    alert("El producto se subio correctamente a la BD");
                    limpiarCampo();
                }
                
            })
            .fail(function(textStatus){
                console.log("La solicitud ha fallado" + textStatus);
            })
}

function limpiarCampo(){
    let campos = document.getElementsByTagName("input");
    for(var i = 0; i < campos.length; i++){
        campos[i].value = "";
    }
}