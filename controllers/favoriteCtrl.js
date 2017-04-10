app.controller('FavoriteCtrl', function ($scope, $rootScope, pictures, $localStorage) {
    console.log("f+");
    console.log("f+");

    $scope.fv = $rootScope.fvorite;
    console.log($scope.fv);


    /*  localStorage.setItem("names", JSON.stringify($scope.fv));
     $scope.parsed = JSON.parse(localStorage.getItem('names'));*/



    $scope.myName = $scope.parsed;
  /*  $scope.$watch("fvorite", function (newValue, oldValue) {
        console.log(" Old - " + oldValue + " new " + newValue );
        $scope.$storage = $localStorage.$default({
            message: $scope.fv
        });
        if (window.addEventListener) {
            window.addEventListener("storage", handle_storage, false);
        } else {
            window.attachEvent("onstorage", handle_storage);
        };
        function handle_storage(e) {
            if (!e) { $scope.e = window.event; }
        }

        $scope.data = $scope.$storage.message;
    });*/
    $scope.$storage = $localStorage.$default({
        message: $scope.fv
    });
    if (window.addEventListener) {
        window.addEventListener("storage", handle_storage, false);
    } else {
        window.attachEvent("onstorage", handle_storage);
    };
    function handle_storage(e) {
        if (!e) { $scope.e = window.event; }
    }

    $scope.data = $scope.$storage.message;

});