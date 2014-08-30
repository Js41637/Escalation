/*
 * Thanks to code from DuckieTV
 * SchizoDuckie 2014
 */
angular.module('TF2.directives.lazyload', [])

.directive('lazyLoad', function($document, $parse) {
    return {
        restrict: 'A',
        link: function($scope, iElement, attrs) {
            iElement = angular.element(iElement);
            attrs.ngHide = true;

            /** 
             * Observe the lazy-background attribute so that when it's set on a rendered element 
             * it can fetch the new image and fade to it 
             */
            attrs.$observe('lazyLoad', function(newSrc) {
                if (newSrc == "") return;
                iElement.attr('oldStyle', iElement.attr('style') == null ? '' : iElement.attr('style'));
                iElement.css('background-image', 'url(img/spinner.gif)');
                iElement.css('background-position', 'center');
                iElement.css('background-size', 'initial');
                iElement.attr('style', iElement.attr('style'));

                /** 
                 * Use some oldskool preloading techniques to load the image
                 * and fade it in when done 
                 */
                var img = $document[0].createElement('img');
                img.onload = function() {
                    iElement.attr('style', iElement.attr('oldStyle'));
                    iElement.css('background-image', 'url(' + this.src + ')');
                };
                img.onerror = function(e) {
                    console.log("image load error!", e);
                    iElement.css({
                        'opacity': '1'
                    });
                };
                attrs.ngHide = false;
                img.src = newSrc;
            });

        }
    };
})