angular.module('sofa.address', [
    'sofa-address.tpl.html'
]);

angular.module('sofa.address').directive('sofaAddress', function () {

    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        templateUrl: 'sofa-address.tpl.html'
    };
});
