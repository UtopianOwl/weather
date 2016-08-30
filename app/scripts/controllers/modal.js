'use strict';

angular.module('weatherApp')
    .controller('modalCtrl', ['$uibModal', '$log', function ($uibModal, $log) {

        var $ctrl = this;

        //Function which opens a modal of a given size when called
        //Modal template defined by template in directives folder
        $ctrl.open = function (size) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'scripts/directives/add-location-modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size
            });
            
            //function to handle value selected when modal is dismissed 
            modalInstance.result.then(function (selectedItem) {
                console.log(selectedItem);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }]);
//This is a separate controller to control the individual modal instance created by the 'open' function above
angular.module('weatherApp')
    .controller('ModalInstanceCtrl', ['$scope', '$http', '$uibModalInstance', 'locationService', function ($scope, $http, $uibModalInstance, locationService) {
        var $ctrl = this;
        
        //Function called when the ok button is selected. 
        $ctrl.ok = function (selectedLocation) {
           
        //Calls function in location service to store selected value
            locationService.saveLocation(selectedLocation);
        
           //closes modal (as opposed to dismiss)
            $uibModalInstance.close(selectedLocation);
        };
        
        //function called when cancel button is clicked
        $ctrl.cancel = function () {
            //dismissed modal (as opposed to close)
            $uibModalInstance.dismiss('cancel');
        };
        //Function makes HTTP calls to google maps API to retreive address information for typeahead search bar.
        $scope.getLocation = function (val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function (response) {
                return response.data.results.map(function (item) {
                    return item.formatted_address;
                });
            });
        };
    }]);