'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
  .controller('ForecastCtrl', ['$scope', '$http', 'weatherService', 'locationService', function ($scope, $http, weatherService, locationService) {

        $scope.getWiClass = function (weatherData) {
            return "wi-yahoo-" + weatherData.code;
        };
      
      $scope.forecastDays = weatherService.selectedForecast;
}]);
