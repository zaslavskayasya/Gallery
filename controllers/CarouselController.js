app.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var currIndex = 0;
    var slides = $scope.slides = [
        {
            image: 'slider.jpg',
            text: 'КЛЕВАЯ НАДПИСЬ 1',
            id: currIndex++
        },
        {
            image: 'tree.jpeg',
            text: 'КЛЕВАЯ НАДПИСЬ 2',
            id: currIndex++
        }
    ];

    $scope.addSlide = function() {
        slides.push({
            image: 'slider.jpg' ,
            text: [''][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function() {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
});