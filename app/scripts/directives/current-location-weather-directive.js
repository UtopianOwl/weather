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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the currentLocationWeatherDirective directive');
      }
    };
  });
