app.controller('GalleryCtrl', function ($scope, $rootScope, pictures, $routeParams) {
     $scope.limitValue = "9";

     $scope.onlyOne = true;

     $scope.$on("messageEvent", function (event, args) {
          $scope.onlyOne = args.mesHideOther;
          console.log($scope.onlyOne)

     });

     $scope.prev = function () {
          $scope.onlyOne = true;
     };

     $scope.more = function () {
          $scope.limitValue = $scope.limitValue +9;
     };
     $scope.checkFilter = function (value) {
          $scope.check = value;
          console.log(value);
     };
     $scope.reset = function (value) {
          $scope.check = value;
     };

     $scope.galleryItem = pictures.pictures;


});