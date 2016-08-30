'use strict';

/**
 * @ngdoc service
 * @name weatherApp.weatherService
 * @description
 * # weatherService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
    .service('weatherService', ['$http', 'apiService', function ($http, apiService) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var currentWeather = {};
        this.selectedForecast = {};
        this.getCurrentLocationWeather = function () {
            return apiService.getCurrentLocation().then(function (data) {
                var searchTerm = data.city + ", " + data.region + " " + data.postal + ", " + data.country;
                return apiService.queryPlaces(searchTerm);
            }).then(function (data) {
                var woeid = data.query.results.place.woeid;
                currentWeather.woeid = woeid;
                return apiService.getWeatherData(woeid);
            }).then(function (data) {
                currentWeather.location = data.query.results.channel.location;
                currentWeather.condition = data.query.results.channel.item.condition;
                currentWeather.forecast = data.query.results.channel.item.forecast;
                return currentWeather;
            });
        };
        
        this.getLocationWeather = function (location) {
           return apiService.getWeatherData(location.woeid)
               .then(function (data) {
                location.location = data.query.results.channel.location;
                location.condition = data.query.results.channel.item.condition;
                location.forecast = data.query.results.channel.item.forecast;
            });
        };
  }]);