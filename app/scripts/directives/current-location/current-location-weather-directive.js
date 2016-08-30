'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:currentLocationWeatherDirective
 * @description
 * # currentLocationWeatherDirective
 */
angular.module('weatherApp')
  .directive('currentLocationWeatherDirective', function () {
    return {
      templateUrl: 'scripts/directives/current-location/current-location-weather-directive.html',
      restrict: 'E',
      replace: true
    };
  });
