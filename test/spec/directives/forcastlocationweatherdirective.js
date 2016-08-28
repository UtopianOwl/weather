'use strict';

describe('Directive: forcastLocationWeatherDirective', function () {

  // load the directive's module
  beforeEach(module('weatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<forcast-location-weather-directive></forcast-location-weather-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the forcastLocationWeatherDirective directive');
  }));
});
