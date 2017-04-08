app.controller('GalleryCtrl', function ($scope, $rootScope, $routeParams) {
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




     $scope.galleryItem = [
          {
               id: 1,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'коты'

          },
          {
               id: 2,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'люди'

          },
          {
               id: 3,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'пейзаж'

          },
          {
               id: 4,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'цветы'

          },
          {
               id: 5,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'Одесса'

          },
          {
               id: 6,
               image : './img/img.jpg',
               imageUrl : './img/img',
               name : 'Весеннее настроение1',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'коты'

          },
          {
               id: 7,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'люди'

          },
          {
               id: 8,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'пейзаж'

          },
          {
               id: 9,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'Одесса'

          },
          {
               id: 10,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'Одесса'

          },
          {
               id: 11,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'Одесса'

          },
          {
               id: 12,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'Одесса'

          },
          {
               id: 13,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'Одесса'

          },
          {
               id: 14,
               image : './img/img.jpg',

               name : 'Весеннее настроение1',
               size : '30 X 50',
               materials: 'frdfhtkm, холст',
               description: 'коты'

          },
]
});