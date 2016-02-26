// Importar los módulos necesarios.
var express = require('express');
var path = require('path');

// Obtener los parámetros de línea de comandos.
var port = process.argv[2];

// Ruta del directorio cuyo contenido se desea servir.
// La ruta del directorio se especifica con el segundo parámetro de
// línea de comandos. Si no se indica, se utiliza 'public'.
var publicDirPath = path.join(__dirname, 'public')

// Inicializar la app express.
var app = express();

// Indicar a la aplicación que tiene que servir el contenido del directorio
// indicado en la variable publicDirPath.
// El servicio proporciona cualquier archivo contenido en la carpeta de forma
// estática, indicando su ruta relativa, por ejemplo:
//    http://localhost:<port>/prueba.txt -> devuelve prueba.txt
//    http://localhost:<port>/main.css -> devuelve main.css
//    http://localhost:<port> -> devuelve index.html si existiera.
app.use(express.static(publicDirPath))

// Poner el servidor a escuchar el puerto indicado por línea de comandos.
app.listen(port);