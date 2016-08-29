'use strict';

describe('Directive: currentLocationWeatherDirective', function () {

  // load the directive's module
  beforeEach(module('weatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<current-location-weather-directive></current-location-weather-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the currentLocationWeatherDirective directive');
  }));
});
