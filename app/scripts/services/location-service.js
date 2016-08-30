'use strict';

/**
 * @ngdoc service
 * @name weatherApp.locationService
 * @description
 * # locationService
 * Service in the weatherApp.
 */
angular.module('weatherApp')
  .service('locationService', ['apiService', function (apiService) {
    var self = this;
    this.savedLocations = [],
    this.saveLocation = function (locationName) {
        var newLocation = {};
        return apiService.queryPlaces(locationName).then(function (data) {
            newLocation.woeid = data.query.results.place.woeid;
            return apiService.getWeatherData(newLocation.woeid);
        }).then(function (data) {
            newLocation.location = data.query.results.channel.location;
            newLocation.condition = data.query.results.channel.item.condition;
            newLocation.forecast = data.query.results.channel.item.forecast;
            self.savedLocations.push(newLocation);
        });
    };
      
    this.deleteLocation = function (location) {
        function matchWoeid(element) {
            return element.woeid === location.woeid;
        }
        var index = self.savedLocations.findIndex(matchWoeid);
        self.savedLocations.splice(index, 1);
    };
  }]);
