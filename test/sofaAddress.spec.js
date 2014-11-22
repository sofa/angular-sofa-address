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
            company: 'Company',
            firstName: 'Name',
            lastName: 'Surname',
            street: 'Street',
            streetNumber: '12',
            zip: '00000',
            city: 'City',
            country: {
                label: 'Germany'
            }
        };
        element = $compile('<sofa-address data="data"></sofa-address>')($rootScope);
        $rootScope.$digest();
        var children = element.find('span');
        expect(children[0].innerText).toEqual('Company');
        expect(children[1].innerText).toEqual('Name Surname');
        expect(children[2].innerText).toEqual('Street 12');
        expect(children[3].innerText).toEqual('00000 City');
        expect(children[4].innerText).toEqual('Germany');
    });

    it('should display street extra if applied', function () {
        $rootScope.data = {
            company: 'Company',
            firstName: 'Name',
            lastName: 'Surname',
            street: 'Street',
            streetExtra: 'b',
            streetNumber: '12',
            zip: '00000',
            city: 'City',
            country: {
                label: 'Germany'
            }
        };
        element = $compile('<sofa-address data="data"></sofa-address>')($rootScope);
        $rootScope.$digest();
        var children = element.find('span');
        expect(children[3].innerText).toEqual('b');
    });
});
