app.controller('onePicCtrl', function ($scope,  $routeParams, $rootScope ) {

    $scope.id = this.id;




    $scope.datArr = [ ];


  $scope.$on("messageEvent", function (event, args) {
        $scope.name = args.messageName;
        $scope.id = args.messageId;
        $scope.img = args.messageImage;
        $scope.size = args.messageSize;
        $scope.materials = args.messageMaterials;
        $scope.description = args.messageDeascription;
        console.log($scope.name);
        return $scope.newI = args;
    });

    $scope.addDataFunc = function () {
        console.log('hi addDataFunc ');
        console.log(typeof $scope.fvorite);
        $scope.fvorite.push($scope.newI);
        console.log($scope.fvorite);
        return  $scope.fvorite ;

    };
    $rootScope.fvorite = [ ];
    console.log($scope.datArr);
    console.log(typeof $scope.datArr);
    console.log(typeof $scope.fvorite);

    localStorage.setItem('myKey', $scope.name);
    var localValue = localStorage.getItem('myKey');
    console.log(localValue);


});