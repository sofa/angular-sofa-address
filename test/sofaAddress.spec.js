'use strict';

describe('sofa.address', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.address'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should display address data', function () {
        $rootScope.data = {
            company: 'Sansibar',
            firstName: 'John',
            lastName: 'Doe',
            street: 'Steintor',
            streetNumber: '12',
            zipCode: '30159',
            city: 'Hannover',
            country: {
                label: 'Deutschland'
            }
        };
        element = $compile('<sofa-address data="data"></sofa-address>')($rootScope);
        $rootScope.$digest();
        var children = element.find('span');
        expect(children[0].innerText).toEqual('John Doe');
        expect(children[1].innerText).toEqual('Sansibar');
        expect(children[2].innerText).toEqual('Steintor 12');
        expect(children[3].innerText).toEqual('30159 Hannover');
        expect(children[4].innerText).toEqual('Deutschland');
    });

    it('should display street extra if applied', function () {
        $rootScope.data = {
            company: 'Sansibar',
            firstName: 'John',
            lastName: 'Doe',
            street: 'Steintor',
            streetAdditional: '1. Etage',
            streetNumber: '12',
            zipCode: '30159',
            city: 'Hannover',
            country: {
                label: 'Deutschland'
            }
        };
        element = $compile('<sofa-address data="data"></sofa-address>')($rootScope);
        $rootScope.$digest();
        var children = element.find('span');
        expect(children[3].innerText).toEqual('1. Etage');
    });
});
