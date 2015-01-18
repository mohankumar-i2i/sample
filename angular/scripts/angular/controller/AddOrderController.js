sampleApp.controller('AddOrderController', function($scope,$http) {

    $scope.message = 'This is Add new order screen';

    $scope.select = function() {
        $http.get("/getAll")
            .success(function(response) {
                $scope.objects = response;
            });
    };

});