'use strict';

describe('Directive: addLocationModal', function () {

  // load the directive's module
  beforeEach(module('weatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-location-modal></add-location-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addLocationModal directive');
  }));
});
