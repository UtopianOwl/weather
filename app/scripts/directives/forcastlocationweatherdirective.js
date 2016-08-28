'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:forcastLocationWeatherDirective
 * @description
 * # forcastLocationWeatherDirective
 */
angular.module('weatherApp')
  .directive('forcastLocationWeatherDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the forcastLocationWeatherDirective directive');
      }
    };
  });
