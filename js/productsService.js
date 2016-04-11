(function() {
    'use strict';

    angular
        .module('gemStore')
        .service('productsSvc', ProductsSvc);

    function ProductsSvc($http) {
        this.findAll = findAll;

        function findAll() {

            return $http.get('js/store-products.json')
                .then(function (response) {
                    console.log(response);
                    return response.data;
            });

        }
    }
})();
