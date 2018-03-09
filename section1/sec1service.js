angular.module('routerApp').service('loginService', ['$q', '$http', function($q, $http) {



    this.getLogin = function(data) {
        var D = $q.defer()
        $http.get("data.json", data).then(function(data) {
            D.resolve(data);
        }, function(data) {
            D.resolve(data);
        });


        // )
        //     .error(function(data) {
        //         D.resolve(data);
        //     });
        return D.promise;
    }



}]);