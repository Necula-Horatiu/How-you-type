(function () {
    'use strict';

    angular.module('mainApp').controller('homeController', ['dataContext', function (dataContext) {
        var vm = this;
        var tdna = new TypingDNA();
        console.log('aici1');

        vm.show = function () {
            console.log('aici');
            console.log(tdna.getTypingPattern({ type: 1, text: vm.input }));
        };

    }]);

})();