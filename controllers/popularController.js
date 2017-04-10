app.controller('popularController', function ($scope, $rootScope, $routeParams, pictures,  $localStorage) {
    var popIndex = 0;

    $scope.popItem = pictures.pictures;

    $scope.send = function (name, id, image , size, materials, description) {
        // $broadcast - отправка события всем scope от rootScope
        $rootScope.$broadcast("messageEvent", {

            messageName: $scope.popItem = name,
            messageId: $scope.popItem = id,
            messageImage: $scope.popItem = image,
            messageSize: $scope.popItem = size,
            messageMaterials: $scope.popItem = materials,
            messageDeascription: $scope.popItem = description,
            mesHideOther: $scope.hideit = false,
        });
       /* $scope.$storage = $localStorage.$default({
            messageName1: name,
        });*/

    };

});