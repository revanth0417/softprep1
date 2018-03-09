'use strict';

angular.module('inspinia').service('configurationService', ['$q', function($q) {
    this.baseUrl = function() {

        // return "http://localhost/services/velocity/api";
        return "http://velocityrocktools.com/velocity/api";
    }
    this.downUrl = function() {

        //return "http://localhost/services/velocity/";

        return "http://velocityrocktools.com/velocity/";
    }

}]);