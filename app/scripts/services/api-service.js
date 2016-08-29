'use strict';

/**
 * @ngdoc service
 * @name weatherApp.apiService
 * @description
 * # apiService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
    .service('apiService', ['$http', function ($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        // ipinfo REST endpoint. GET location data from ip address
        this.getCurrentLocation = function () {
            $http.get('http://ipinfo.io')
                .then(function (response) {
                    return response.data;
                }, function (response) {
                    alert("Error " + response.status + ": " + response.statusText);
                });
        };
        // YQL geo REST endpoint. GET possible WOEIDs associated with search term
        this.queryPlaces = function (searchTerm) {
            var queryTerm = encodeURIComponent(searchTerm);
            $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22' + queryTerm + '%22&format=json&diagnostics=true&callback=')
                .then(function (response) {
                    return response.data;
                }, function (response) {
                    alert("Error " + response.status + ": " + response.statusText);
                });
        };
        // Get weather data for specific location
        this.getWeatherData = function (woeid) {
            $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D' + woeid + '&format=json&diagnostics=true&callback=')
                .then(function (response) {
                    return response.data;
                }, function (response) {
                    alert("Error " + response.status + ": " + response.statusText);
                });
        };
    }]);