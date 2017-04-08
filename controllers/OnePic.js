app.controller('onePicCtrl', function ($scope, $routeParams, $rootScope ) {

    $scope.id = this.id;

    $scope.fvorite = [];




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

    $scope.addToFavorite = function () {
        $scope.add = [];
        $scope.add =  $scope.add.push($scope.newI);
        console.log($scope.newI);

    };
    $scope.add = [];
    console.log($scope.add);

    localStorage.setItem('myKey', $scope.name);
    var localValue = localStorage.getItem('myKey');
    console.log(localValue);


});