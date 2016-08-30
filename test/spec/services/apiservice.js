'use strict';

describe('Service: apiService', function () {
    var sfoLocation = {
        "query": {
            "count": 1,
            "created": "2016-08-29T18:27:10Z",
            "lang": "en-US",
            "diagnostics": {
                "publiclyCallable": "true",
                "url": {
                    "execution-start-time": "2",
                    "execution-stop-time": "5",
                    "execution-time": "3",
                    "content": "http://unifiedgeo.geotech.yahoo.com:4080/geo/v1/geocode?q=sfo&start=0&size=10&optionalfields=woe.ancestors&minconfidence=0.0001"
                },
                "javascript": {
                    "execution-start-time": "0",
                    "execution-stop-time": "7",
                    "execution-time": "6",
                    "instructions-used": "17024",
                    "table-name": "geo.places"
                },
                "user-time": "7",
                "service-time": "3",
                "build-version": "0.2.48"
            },
            "results": {
                "place": {
                    "lang": "en-US",
                    "xmlns": "http://where.yahooapis.com/v1/schema.rng",
                    "yahoo": "http://www.yahooapis.com/v1/base.rng",
                    "uri": "http://where.yahooapis.com/v1/place/12521721",
                    "woeid": "12521721",
                    "placeTypeName": {
                        "code": "14",
                        "content": "Airport"
                    },
                    "name": "San Francisco International Airport",
                    "country": {
                        "code": "US",
                        "type": "Country",
                        "woeid": "23424977",
                        "content": "United States"
                    },
                    "admin1": {
                        "code": "US-CA",
                        "type": "State",
                        "woeid": "2347563",
                        "content": "California"
                    },
                    "admin2": {
                        "code": "",
                        "type": "County",
                        "woeid": "12587707",
                        "content": "San Francisco"
                    },
                    "admin3": null,
                    "locality1": {
                        "type": "Town",
                        "woeid": "2487956",
                        "content": "San Francisco"
                    },
                    "locality2": null,
                    "postal": {
                        "type": "Zip Code",
                        "woeid": "12797178",
                        "content": "94128"
                    },
                    "centroid": {
                        "latitude": "37.62207",
                        "longitude": "-122.383659"
                    },
                    "boundingBox": {
                        "southWest": {
                            "latitude": "37.603939",
                            "longitude": "-122.403732"
                        },
                        "northEast": {
                            "latitude": "37.64463",
                            "longitude": "-122.35482"
                        }
                    },
                    "areaRank": "1",
                    "popRank": "1",
                    "timezone": {
                        "type": "Time Zone",
                        "woeid": "56043663",
                        "content": "America/Los_Angeles"
                    }
                }
            }
        }
    };

    // load the service's module
    beforeEach(module('weatherApp'));

    // instantiate service
    var apiService;
    beforeEach(inject(function (_apiService_) {
        apiService = _apiService_;
    }));

    it('should return search locations', function () {
        expect(apiService.queryPlaces('sfo')).toBe(sfoLocation);
    });


});