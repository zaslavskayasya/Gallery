app.controller('FavoriteCtrl', function ($scope, $rootScope, pictures, $localStorage) {
    console.log("f+");

    $scope.fv = $rootScope.fvorite;
    console.log($scope.fv);

  /*  localStorage.setItem("names", JSON.stringify($scope.fv));

    $scope.parsed = JSON.parse(localStorage.getItem('names'));*/

    $scope.myName = $scope.parsed;
    $scope.$storage = $localStorage.$default({
        message: $scope.fv,
    });

    $scope.data = $scope.$storage.message;
    alert($scope.data )
});