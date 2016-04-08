(function () {
    'use strict';

    angular
        .module('gemStore')
        .directive('description', description);

    function description() {
        var directive = {
            restrict: 'E',
            templateUrl: 'description.html',
            transclude: true
        }
        return directive;
    }
})();
