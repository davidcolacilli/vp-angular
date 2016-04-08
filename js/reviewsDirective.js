(function() {
    'use strict';

    angular
        .module('gemStore')
        .directive('reviews', productReviews);

    function productReviews() {

        var directive = {
            restrict: 'E',
            templateUrl: 'reviews.html',
            controller: ReviewController,
            controllerAs: 'reviewCtrl',
            scope: {
                productreviews: '=productreviews'
            },
            bindToController: true
        }

        function ReviewController() {
            var vm = this;
            vm.addReview = addReview;
            reset();

            function reset() {
                vm.review = {};
            };

            function addReview(product) {
                vm.review.createdOn = Date.now();
                vm.productreviews.push(vm.review);
                reset();
                return true;
            }
        }

        return directive;

    }

})();
