(function () {
    'use strict';
    angular
        .module('gemStore')
        .directive('productTabs', productTabs);

    function productTabs() {
        return {
            restrict: 'E',
            templateUrl: '../product-tabs.html',
            controller: TabController,
            controllerAs: 'tabCtrl'
        }
    }

    function TabController() {
        this.tab = 1;
        this.setTab = function setTab(newTab) {
            this.tab = newTab;
        };
        this.isSet = function isSet(isSetTab) {
            return this.tab == isSetTab;
        }
    }
})();
