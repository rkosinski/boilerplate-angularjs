app.controller('aboutPageCtrl', ['$scope', 'About', function ($scope, About) {

    $scope.hello = 'Hello from About me';
    $scope.about = About.getAll();

}]);