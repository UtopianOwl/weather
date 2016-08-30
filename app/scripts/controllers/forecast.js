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
      
      
      var formatDate = function(element, index, array) {
          var dateSplitArray = element.date.split(" ");
          var formattedDateString = dateSplitArray[2] + "-";
          switch (dateSplitArray[1]) {
              case "Jan":
                  formattedDateString += "01-";
                  break;
              case "Feb":
                  formattedDateString += "02-";
                  break;
              case "Mar":
                  formattedDateString += "03-";
                  break;
              case "Apr":
                  formattedDateString += "04-";
                  break;
              case "May":
                  formattedDateString += "05-";
                  break;
              case "Jun":
                  formattedDateString += "06-";
                  break;
              case "Jul":
                  formattedDateString += "07-";
                  break;
              case "Aug":
                  formattedDateString += "08-";
                  break;
              case "Sep":
                  formattedDateString += "09-";
                  break;
              case "Oct":
                  formattedDateString += "10-";
                  break;
              case "Nov":
                  formattedDateString += "11-";
                  break;
              case "Dec":
                  formattedDateString += "12-";
                  break;
          };
          formattedDateString += dateSplitArray[0];
          var date = moment(formattedDateString).format('MMM Do');
          var day = moment(formattedDateString).format('ddd')
          element.date = date;
          element.day = day;
      };
      
      $scope.forecastDays.forEach(formatDate);
    
    
    
}]);
