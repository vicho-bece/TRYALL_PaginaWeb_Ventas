$(document).ready(function(){

    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3000/todos",
        data:JSON.stringify({}),
        dataType: "json",
    })
    .done(function(data){
        for(let i = 0; data.result[i]!=null; i++){
            var carta = `<br><div class="card"><div class="card-body"><h5 class="card-title">`+data.result[i].NombreProducto+`</h5>
            <p class="card-text">Codigo del Producto: `+data.result[i].Codigo+`</p><p class="card-text">Cantidad de stock: `+data.result[i].Stock+`</p>
            <p class="card-text">Fabricante: `+data.result[i].Fabricante+`</p><p class="Precio">$`+data.result[i].Precio+`</p><a href="#" class="btn btn-primary btn-add">Agregar al carrito</a>`
            $("#productos").append(carta);
        }
    })
})