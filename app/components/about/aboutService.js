app.service('About', ['$http', function($http) {
    var myData = null;

    var promise = $http.get('app/data/aboutData.json').success(function (data) {
        myData = data;
    });

    return {
        promise: promise,
        getAll: function () {
            return myData;
        }
    };
}]);