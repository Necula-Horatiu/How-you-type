(function () {
    'use strict';

    angular.module('mainApp').controller('homeController', ['dataContext', function (dataContext) {
        var vm = this;
        var tdna = new TypingDNA();

        vm.text0 = false;
        vm.text1 = false;
        vm.text2 = false;

        vm.random = Math.floor(Math.random() * 3);
        if (vm.random === 0) {
            vm.text0 = true;
        }
        if (vm.random === 1) {
            vm.text1 = true;
        }
        if (vm.random === 2) {
            vm.text2 = true;
        }


        vm.show = function () {
            vm.tip = tdna.getTypingPattern({ type: 0, text: vm.pass });
            dataContext.postData(vm.name, vm.tip).then(
                function (response) {
                    console.log(response.data);
                    if (response.data.message === "Done") {
                        alert("User salvat!");
                    }
                    vm.name = "";
                    vm.pass = "";
                    vm.random = Math.floor(Math.random() * 3);
                },
                function (error) {
                    console.log(error);
                }
            );
        };

        vm.show2 = function () {
            dataContext.getData2(vm.name).then(
                function (response) {
                    if (response.data.count !== 0) {
                        alert("Da, ai deja un cont!");
                    }
                    else {
                        alert("Nu!");
                    }
                },
                function (error) {
                    console.log(error);
                }
            );
        };

        vm.show3 = function () {
            vm.tip = tdna.getTypingPattern({ type: 0, text: vm.pass });
            console.log(vm.tip);
            dataContext.checkData(vm.name, vm.tip).then(
                function (response) {
                    console.log(response.data);
                    if (response.data.result === 1) {
                        alert("Salut " + vm.name);
                    } else {
                        alert("Who are you b1tch!?");
                    }
                    vm.name = "";
                    vm.pass = "";
                    vm.random = Math.floor(Math.random() * 3);
                },
                function (error) {
                    console.log(error);
                }
            );
        };

    }]);

})();