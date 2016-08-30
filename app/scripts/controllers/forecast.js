'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the weatherApp
 */
angular.module('weatherApp')
    .controller('ForecastCtrl', ['$scope', '$http', 'weatherService', function ($scope, $http, weatherService) {
        
        //  function to concatenate Weather Data Code (from Yahoo weather API) onto angular-class. 
        // Ensures the proper weather-icon is displayed.

        $scope.getWiClass = function (weatherData) {
            return "wi-yahoo-" + weatherData.code;
        };
        
        // Maps the array of forecast data stored in weatherService to a scoped variable.
        $scope.forecastDays = weatherService.selectedForecast;

        // Reformats date string from forecast.date
        // First to ISO 8601 so that it can be parsed by Moment.js
        // Second formatting using Moment.js for display format
        var formatDate = function (element) {
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
            }
            formattedDateString += dateSplitArray[0];
            var date = moment(formattedDateString).format('MMM Do');
            var day = moment(formattedDateString).format('ddd');
            element.date = date;
            element.day = day;
        };
        
        // Array.forEach method called on forecastDays array which will reformat the date and day strings using formatDate function (above) as callback
        $scope.forecastDays.forEach(formatDate);



}]);