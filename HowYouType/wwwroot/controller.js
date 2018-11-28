var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./home/home.html"
        });
});