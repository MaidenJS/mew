// Composition Root
import account from './models/account.model';
import AboutController from './controllers/about.controller';
import Router from './core/router';
import renderView from './utilities/helpers';
//import init from './app';

init();

function init() {
    if (!location.hash) {
        location.hash = "#home";
    }

    app();

    window.addEventListener("hashchange", app, true);

    function app() {

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
            controller: 'AboutController'
        });
        router.add({
            name: 'contact',
            controller: 'ContactController'
        });
        router.add({
            name: 'profiles',
            controller: 'ProfileController'
        });

        let fragmentId = location.hash.substr(1);

        router.action(fragmentId);
    }

    // http://www.phpied.com/3-ways-to-define-a-javascript-class/
    // don't forget the es6 way as well
    console.log((new account));
}
