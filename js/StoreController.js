(function () {
    'use strict';

    angular.module('gemStore')
        .controller('StoreController', StoreController);


    function StoreController($log, productsSvc) {
        var vm = this;
        vm.products = [];
        vm.purchase = purchase;

        fillProducts();

        function fillProducts() {
            productsSvc.findAll().then(function(products) {
                vm.products = products;
            });
        }

        function purchase(product) {
            console.log('funciona');
            $log.warn('StoreController.purchase NOT_IMPLEMENTED. Trying to buy %s', product.name);
        }
    }

})();
