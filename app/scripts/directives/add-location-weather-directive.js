'use strict';

/**
 * @ngdoc directive
 * @name weatherApp.directive:addLocationWeatherDirective
 * @description
 * # addLocationWeatherDirective
 */
angular.module('weatherApp')
  .directive('addLocationWeatherDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the addLocationWeatherDirective directive');
      }
    };
  });
