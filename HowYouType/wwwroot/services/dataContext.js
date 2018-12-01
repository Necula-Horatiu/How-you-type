(function() {
    'use strict';

    angular.module('mainApp').service('dataContext', ['httpService', function (httpService) {
        var service = {
            getData2: getData2,
            postData: postData,
            checkData: checkData
        };

        function getData2(id) {
            return httpService.get('api/main/' + id);
        }

        function checkData(id, tip) {
            return httpService.post('api/main/check/' + id + '/' + tip, { id: id, tip: tip });
        }

        function postData(id, tip) {
            return httpService.post('api/main/' + id + '/' + tip, { id: id, tip: tip });
        }

        return service;
    }]);

})();