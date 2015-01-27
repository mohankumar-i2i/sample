sampleApp.controller('AddOrderController', function($scope,$http) {

    $scope.message = 'This is Add new order screen';

    $scope.select = function() {
        $http.get("service/api/getAll")
            .success(function(response) {
                $scope.objects = response;
            });
    };

    $scope.getAllDeals = function() {
        $http.get("service/api/getDeals")
            .success(function(response) {
                $scope.deals = response;
            });
    };

    $scope.getAllCategory = function() {
        $http.get("service/api/getAllCategory")
            .success(function(response) {
                $scope.Categories = response;
            });
    };

});