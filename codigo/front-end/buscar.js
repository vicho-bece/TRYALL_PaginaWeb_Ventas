$(document).ready(function(){
    $("#busca").validate({
        rules:{
            Codigo:{
                required: true
            }
        },
        messages:{
            Codigo:{
                required: "Favor de ingresar un codigo"
            }
        },
        submitHandler: function(form){
            
            $.ajax({
                data: JSON.stringify({"Codigo":$("#Codigo").val()}),
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
                         carta = `<br><div class="card"><div class="card-body"><h5 class="card-title">`+data.result[i].nombreProducto+`</h5>
                        <p class="card-text">Codigo del Producto: `+data.result[i].Codigo+`</p><p class="card-text">Cantidad de stock: `+data.result[i].stock+`</p>
                        <p class="card-text">Fabricante: `+data.result[i].fabricante+`</p><a href="#" class="btn btn-primary">Agregar al carrito</a>`
                        $("#resultados").append(carta);
                    }
                    
                }
                else{
                    $("#resultados").text("No se encontraron reusltados");
                }
            })
            .fail(function(textStatus){
                console.log("La solicitud a fallado:" + textStatus);
            })
        }
    })

});