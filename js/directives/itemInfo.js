angular.module('TF2.directives.iteminfo', [])

.directive('iteminfo', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            'item': '=data'
        },
        templateUrl: "templates/itemInfo.html"
    };
});