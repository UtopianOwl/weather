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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the locationForecastDirective directive');
      }
    };
  });
