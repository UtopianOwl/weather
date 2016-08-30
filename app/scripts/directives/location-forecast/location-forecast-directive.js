'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:locationForecastDirective
 * @description
 * # locationForecastDirective
 */
angular.module('weatherApp')
  .directive('locationForecastDirective', function () {
    return {
      templateUrl: 'scripts/directives/location-forecast/location-forecast-directive.html',
      restrict: 'E',
      replace: true
    };
  });
