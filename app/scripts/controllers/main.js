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
        //  function to concatenate Weather Data Code (from Yahoo weather API) onto angular-class. 
        // Ensures the proper weather-icon is displayed.
        $scope.getWiClass = function (weatherData) {
            console.log(weatherData);
            return "wi-yahoo-" + weatherData.code;
        };

       //Call weatherService function to get weather data for current location.
       // map data to scope variable
        weatherService.getCurrentLocationWeather().then(function (currentWeather) {
            $scope.currentWeather = currentWeather;
        });
        
        //retrieve saved locations array from locationService.
        //map saved locations array to scoped variable
        $scope.savedLocations = locationService.savedLocations;
        
        //Defines a scoped function to store the selected location's forecast as an array to a variable in the weatherService.
        //Allows selected forecast to be retreived from the forecast view
        $scope.selectForecast = function (forecast) {
            weatherService.selectedForecast = forecast;
        };
}]);