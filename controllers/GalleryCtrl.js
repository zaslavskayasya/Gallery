app.controller('GalleryCtrl', function ($scope, $rootScope, pictures, $routeParams) {
     $scope.limitValue = "9";

     $scope.more =function () {
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