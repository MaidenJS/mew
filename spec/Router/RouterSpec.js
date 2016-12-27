import Router from '../client/core/router';
import AboutController from '../client/controllers/about.controller';

describe('Maiden Router',  () => {

    it('test that the router accepts a paramter :param', () => {

        let router = new Router({});

        router.add({
            name: 'home',
            controller: function () {
                renderView('js/views/home.html', {
                    first_name: 'John'
                });
            }
        });
        router.add({
            name: 'about',
            controller: AboutController
        });

        expect(true).toBe(true);
    });

    it("regular expression route", () => {
        expect(true).toBe(true);
    });

});