var app = angular.module('Gallery', ['ui.bootstrap', 'ngStorage', 'ngRoute','ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/main.html"
        })
        .when("/about", {
            templateUrl : "templates/about.html"
        })
        .when("/gallery", {
            templateUrl : "templates/gallery.html"
        })
        .when("/contacts", {
            templateUrl : "templates/contacts.html"
        })
        .when("/onePic/:id", {
            controller: "onePicCtrl",
            templateUrl: 'templates/OnePic.html'
        })
    ;
});


