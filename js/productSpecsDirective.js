(function () {
    'use strict';

    angular
        .module('gemStore')
        .directive('productSpecs', productSpecs);

    function productSpecs() {
        return {
            restrict: 'A',
            templateUrl: '../product-specs.html'
        }
    }
})();
