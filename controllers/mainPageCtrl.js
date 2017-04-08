app.controller('mainPageCtrl', function ($scope, $rootScope, $routeParams) {


    $scope.onlyOne = true;

    $scope.$on("messageEvent", function (event, args) {
        $scope.onlyOne = args.mesHideOther;
        console.log($scope.onlyOne)

    });

    $scope.prev = function () {
        $scope.onlyOne = true;
    }

});