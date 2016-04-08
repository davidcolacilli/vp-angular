(function () {
    'use strict';
    angular
        .module('gemStore')
        .directive('gallery', gallery);

    function gallery() {
        return {
            restrict: 'E',
            templateUrl: '../gallery.html',
            controller: GalleryController,
            controllerAs: 'gallery',
            scope: {},
            bindToController: {
                //se pasa la lógica de las imágenes al controlador
                //ahora se trabaja por imagen en lugar de "index en array"
                //(gallery.current instead of images[gallery.current])
                images: '='//::product.images
            }
        }
    }

    function GalleryController() {
        var vm = this;
        vm.hasImages = hasImages();
        vm.current = getFirst();//first image (vm.images[0])
        vm.setCurrent = setCurrent;

        function getFirst() {
            if(hasImages()) {
                return vm.images[0];
            }
        }

        function setCurrent(currentVal) {//currentVal: the image itself
            vm.current = currentVal || getFirst();


        }

        function hasImages() {
            return vm.images.length;
        }
    }
})();
