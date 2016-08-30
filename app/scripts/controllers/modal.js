angular.module('weatherApp')
    .controller('modalCtrl', ['$uibModal', '$log', function ($uibModal, $log) {

        var $ctrl = this;


        $ctrl.open = function (size) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'scripts/directives/add-location/add-location-modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size
            });

            modalInstance.result.then(function (selectedItem) {
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }]);

angular.module('weatherApp')
    .controller('ModalInstanceCtrl', ['$scope', '$http', '$uibModalInstance', 'locationService', function ($scope, $http, $uibModalInstance, locationService) {
        var $ctrl = this;

        $ctrl.ok = function (selectedLocation) {
            locationService.saveLocation(selectedLocation);
            $uibModalInstance.close(selectedLocation);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

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