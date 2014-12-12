/**
 * angular-sofa-address - v0.1.0 - 2014-12-12
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO).
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {

angular.module('sofa.address.templates', ['sofa-address.tpl.html']);

angular.module("sofa-address.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sofa-address.tpl.html",
    "<address class=\"sofa-address\">\n" +
    "    <span class=\"sofa-address__name\">{{data.firstName}} {{data.lastName}}</span>\n" +
    "    <span class=\"sofa-address__company\">{{data.company}}</span>\n" +
    "    <span class=\"sofa-address__street\">{{data.street}} {{data.streetNumber}}</span>\n" +
    "    <span class=\"sofa-address__street\" ng-if=\"data.streetAdditional\">{{data.streetAdditional}}</span>\n" +
    "    <span class=\"sofa-address__city\">{{data.zipCode}} {{data.city}}</span>\n" +
    "    <span class=\"sofa-address__country\">{{data.country.label}}</span>\n" +
    "</address>\n" +
    "");
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
