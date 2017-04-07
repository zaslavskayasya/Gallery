app.controller('onePicCtrl', function ($scope, $routeParams ) {

    $scope.id = this.id;

    $scope.$on("messageEvent", function (event, args) {
        $scope.name = args.messageName;
        $scope.id = args.messageId;
        $scope.img = args.messageImage;
        $scope.size = args.messageSize;
        $scope.materials = args.messageMaterials;
        $scope.description = args.messageDeascription;
        console.log($scope.name)
    })

    console.log($scope.info)





});