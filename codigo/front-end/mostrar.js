$(document).ready(function(){

    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3000/todos",
        data:JSON.stringify({}),
        dataType: "json",
    })
    .done(function(data){
        for(let i = 0; data.result[i]!=null; i++){
            var carta = `<br><div class="card"><div class="card-body"><h5 class="card-title">`+data.result[i].nombreProducto+`</h5>
            <p class="card-text">Codigo del Producto: `+data.result[i].Codigo+`</p><p class="card-text">Cantidad de stock: `+data.result[i].stock+`</p>
            <p class="card-text">Fabricante: `+data.result[i].fabricante+`</p><a href="#" class="btn btn-primary">Agregar al carrito</a>`
            $("#productos").append(carta);
        }
    })
})