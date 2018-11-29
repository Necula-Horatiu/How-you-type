(function() {
    'use strict';

    angular.module('mainApp').service('dataContext', ['httpService', function (httpService) {
        var service = {
            getData: getData,
            postData: postData
        };

        function getData() {
            return 0;
        }

        function postData(path, data) {
            return 0;
        }

        return service;
    }]);

})();