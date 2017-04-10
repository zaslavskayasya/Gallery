app.controller('onePicCtrl', function ($scope,  $routeParams, $rootScope, $localStorage ) {

    $scope.id = this.id;


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



        return $scope.fvorite ;

    };
    $rootScope.fvorite = [ ];





});