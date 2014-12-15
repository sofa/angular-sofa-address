/**
 * angular-sofa-address - v0.1.1 - Mon Dec 15 2014 12:27:44 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa-address.tpl.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('sofa-address.tpl.html',
    '<address>\n' +
    '  <span>{{data.company}}</span>\n' +
    '  <span>{{data.name}} {{data.surname}}</span>\n' +
    '  <span>{{data.street}} {{data.streetnumber}}</span>\n' +
    '  <span ng-if="data.streetextra">{{data.streetextra}}</span>\n' +
    '  <span>{{data.zip}} {{data.city}}</span>\n' +
    '  <span>{{data.country.label}}</span>\n' +
    '</address>\n' +
    '');
}]);

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
}(angular));
