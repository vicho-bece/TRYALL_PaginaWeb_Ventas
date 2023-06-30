$(document).ready(function(){
    $("#busca").validate({
        rules:{
            Buscar:{
                required: true
            }
        },
        messages:{
            Buscar:{
                required: "Favor de ingresar un codigo"
            }
        },
        submitHandler: function(form){
            
            $.ajax({
                data: JSON.stringify({"Buscar":$("#Buscar").val()}),
                contentType: "application/json",
                type: "POST",
                dataType: "json",
                url: "http://127.0.0.1:3000/buscador"
            })
            .done(function(data){
                if(data.result[0]!=null)
                {
                    $("#resultados").empty();
                    for(let i = 0; data.result[i]!=null; i++){
                         carta = `<br><div class="card"><div class="card-body"><h5 class="card-title">`+data.result[i].NombreProducto+`</h5>
                         <p class="card-text">Codigo del Producto: `+data.result[i].Codigo+`</p><p class="card-text">Cantidad de stock: `+data.result[i].Stock+`</p>
                         <p class="card-text">Fabricante: `+data.result[i].Fabricante+`</p><p class="Precio">$`+data.result[i].Precio+`</p><a href="#" class="btn btn-primary btn-add">Agregar al carrito</a>`
                        $("#resultados").append(carta);
                    }
                    
                }
                else{
                    $("#resultados").text("No se encontraron resultados con la palabra ingresada: " + $("#Buscar").val());
                }
            })
            .fail(function(textStatus){
                console.log("La solicitud a fallado:" + textStatus);
            })
        }
    })

});