var app = angular.module("cursoAngular", ['ngRoute']);

app.directive('ngPrism', [function () {
    "use strict";
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.ready(function () {
                Prism.highlightElement(element[0]);
            });
        }
    };
}]);

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
        .otherwise({
            redirectTo: '/'
        });
});