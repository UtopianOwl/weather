'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:savedLocationWeatherDirective
 * @description
 * # savedLocationWeatherDirective
 */
angular.module('weatherApp')
  .directive('savedLocationWeatherDirective', function () {
    return {
      templateUrl: 'scripts/directives/saved-location/saved-location-weather-directive.html',
      restrict: 'E',
      replace: true
    };
  });
