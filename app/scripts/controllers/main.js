'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
    .controller('MainCtrl', ['$scope', '$http', 'weatherService', 'locationService', function ($scope, $http, weatherService, locationService) {

        $scope.getWiClass = function (weatherData) {
            console.log(weatherData);
            return "wi-yahoo-" + weatherData.code;
        };

        weatherService.getCurrentLocationWeather().then(function (currentWeather) {
            $scope.currentWeather = currentWeather;
        });
        
        $scope.savedLocations = locationService.savedLocations;
        
        $scope.selectForecast = function (forecast) {
            weatherService.selectedForecast = forecast;
        }
}]);