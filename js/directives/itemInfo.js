// Register as angular module
angular.module('TF2.directives.iteminfo', [])

//Create directive
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