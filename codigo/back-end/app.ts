const express = require('express');
const mysql = require("mysql");
const app = express();

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const cors = require('cors');
app.use(cors());

//Conexion a la Base De Datos
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306,
    database : 'basedatos'
});

connection.connect(function(err:any) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

//Crear el Server
const configuracion={
    hostname: "127.0.0.1",
    port: 3000,
}

//Mostrar todos los productos
app.post("/todos",jsonParser,(req:any, res:any) => {
    connection.query("select * from productos", function(error:any, results:any, fields:any){
        res.send(JSON.stringify({"result": results}));
    });
});

app.post("/buscador",jsonParser,(req:any, res:any) => {
    let Codigo = req.body.Codigo;
    connection.query("select * from productos where Codigo=?",[Codigo],function(error:any, results:any, fields:any){
        res.send(JSON.stringify({"mensaje":true, "result":results}))
    })
})

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})
   
