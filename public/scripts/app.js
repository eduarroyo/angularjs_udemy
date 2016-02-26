/* jslint browser: true */
/* global angular */
/* global Prism */
/* global $ */

// Declaración del módulo. Dependencias: ngRoute para navegación (angular-route.min.js)
var app = angular.module("cursoAngular", ['ngRoute']);

// Inicialización del ámbito global.
// Se está utilizando para inicializar una variable "fecha" que sirve para el ejemplo
// de los filtros y también para registrar el evento que establece el resaltado de
// sintáxis en los ejemplos de código después de la carga de una vista.
app.run(function($rootScope, $location) {
    "use strict";

    // Inicializar la variable par a el ejemplo de filtros.
    $rootScope.fecha = new Date();
    $rootScope.dias = [ "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

    // Capturar el evento $viewContentLoaded que se dispara tras la carga de una vista
    // El procesamiento que se realiza sirve para establecer el resaltado de sintaxis
    // para los ejemplos de código, para lo que se utiliza el plugin prism.js.
    $rootScope.$on("$viewContentLoaded", function(event, next, current) {
        var codeElements = $(".code");
        for(var i = 0; i < codeElements.length; i++) {
            Prism.highlightElement(codeElements[i]);
        }
    });
});

// Declaración de controladores
app.controller("Clase11Controller", function ($scope) {
    "use strict";
    $scope.contador = 0;
    $scope.incrementar = function () {
        $scope.contador += 1;
    };
    $scope.decrementar = function () {
        $scope.contador -= 1;
    };
});


// Configuración de navegación
// Es necesario el módulo ngRoute en la inyección de dependencias. El módulo está
// declarado en angular-route.min.js.
app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            templateUrl: './inicio.html'
        })
        .when('/clase01', {
            templateUrl: './Seccion1/clase01.html'
        })
        .when('/clase02', {
            templateUrl: './Seccion1/clase02.html'
        })
        .when('/clase03', {
            templateUrl: './Seccion2/clase03.html'
        })
        .when('/clase04', {
            templateUrl: './Seccion2/clase04.html'
        })
        .when('/clase11', {
            templateUrl: 'Seccion3/clase11.html',
            controller: 'Clase11Controller'
        })
        .when('/filtros', {
            templateUrl: 'Seccion4/resumen.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Declaración de filtros

// Filtro greaterThan, limita una lista a aquellos elementos cuya propiedad "prop"
// tiene un valor superior a "val".
app.filter('greaterThan', function () {
    'use strict';
    return function (items, prop, value) {
        return items.filter(function(item) {
            return item[prop] > value;
        });
    };
});

// Filtro checkmark, reemplaza valores booleanos por V para true y X para false.
app.filter('checkmark', function() {
    'use strict';
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});