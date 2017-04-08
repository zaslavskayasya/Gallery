app.controller('popularController', function ($scope, $rootScope, $routeParams,  $localStorage) {
        var popIndex = 0;

       $scope.popItem = [
           {
               id: 1,
               image : './img/img.jpg',
               imageUrl : './img/img',
               name : 'Весеннее настроение1',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem lalala'

           },
           {
               id: 2,
               image : 'slider.jpg',
               name : 'Весеннее настроение2',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem lalala'
           },
           {
               id: 3,
               image : 'slider.jpg',
               name : 'Весеннее настроение3',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem kkks wejknf awkjenf jeknfjawdbv ajkwbfkjabwefjksdb asfvaer'
           },
           {
               id: 4,
               image : 'slider.jpg',
               name : 'Весеннее настроение4',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem kkks wejknf awkjenf jeknfjawdbv ajkwbfkjabwefjksdb asfvaer'
           },
           {
               id: 5,
               image : 'slider.jpg',
               name : 'Весеннее настроение5',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem kkks wejknf awkjenf jeknfjawdbv ajkwbfkjabwefjksdb asfvaer'

           },
           {
               id: 6,
               image : 'slider.jpg',
               name : 'Весеннее настроение6',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem kkks wejknf awkjenf jeknfjawdbv ajkwbfkjabwefjksdb asfvaer'
           },
           {
               id: 7,
               image : 'slider.jpg',
               name : 'Весеннее настроение7',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem kkks wejknf awkjenf jeknfjawdbv ajkwbfkjabwefjksdb asfvaer'
           },
           {
               id: 8,
               image : 'slider.jpg',
               name : 'Весеннее настроение8',
               size : '40 X 50',
               materials: 'масло, холст',
               description: 'lorem kkks wejknf awkjenf jeknfjawdbv ajkwbfkjabwefjksdb asfvaer'
           },
       ];

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
        $scope.$storage = $localStorage.$default({
            messageName: name,
        });
    };

});