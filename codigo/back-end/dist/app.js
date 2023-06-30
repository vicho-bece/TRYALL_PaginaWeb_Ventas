"use strict";
const express = require('express');
const mysql = require("mysql");
const app = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
app.use(cors());
//Conexion a la Base De Datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'basedatos'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
//Crear el Server
const configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
//Mostrar todos los productos
app.post("/todos", jsonParser, (req, res) => {
    connection.query("select * from productos", function (error, results, fields) {
        res.send(JSON.stringify({ "result": results }));
    });
});
//regexp concat('^',?)
app.post("/buscador", jsonParser, (req, res) => {
    let Buscar = req.body.Buscar;
    connection.query("select * from productos where Codigo regexp concat('^',?) or nombreProducto like '%" + Buscar + "%'", [Buscar], function (error, results, fields) {
        res.send(JSON.stringify({ "mensaje": true, "result": results }));
    });
});
app.put("/subir", jsonParser, (req, res) => {
    let Codigo = req.body.Codigo;
    let nombre = req.body.nombre;
    let stock = req.body.stock;
    let fabricante = req.body.fabricante;
    let Precio = req.body.Precio;
    connection.query("insert into productos (Codigo,NombreProducto,Fabricante,Stock,Precio) VALUES (?,?,?,?,?)", [Codigo, nombre, fabricante, stock, Precio], function (error, results, fields) {
        if (error) {
            res.send(JSON.stringify({ "mensaje": false }));
        }
        else {
            res.send(JSON.stringify({ "mensaje": true, "results": results }));
        }
    });
});
app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`);
});
