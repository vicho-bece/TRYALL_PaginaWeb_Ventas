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

            $.ajax({
            data: JSON.stringify({"Codigo":Codigo,"nombre":nombre,"fabricante":fabricante,"stock":stock}),
            contentType: "application/json",
            type: "PUT",
            dataType: "json",
            url: "http://127.0.0.1:3000/subir",
            })
            .done(function(data){
                console.log("El producto se subio correctamente a la BD");
            })
            .fail(function(textStatus){
                console.log("La solicitud ha fallado" + textStatus);
            })
}