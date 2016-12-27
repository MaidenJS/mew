// Composition Root
import renderView from './utilities/helpers';
import Router from './core/router';
import AboutController from './modules/pages/about.controller';
import ContactController from './modules/pages/contact.controller';
import AccountController from './modules/account/account.controller';
//import PageNotFoundController from './controllers/not-found-page.controller';

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
            controller: () => {
                renderView('js/views/home.html', {
                    first_name: 'John'
                });
            }
        });
        router.add({
            name: 'about',
            controller: AboutController
        });
        router.add({
            name: 'contact',
            controller: ContactController
        });
        router.add({
            name: 'account/:id/test/:test',
            controller: AccountController
        });

        /**
         * for route not found pages
         */
        router.notFound({
            controller: () => {
                console.log('404');
                document.getElementById('app').innerHTML = 'PAGE NOT FOUND BRO!';
            }
        });

        let fragmentId = location.hash.substr(1);

        router.action(fragmentId);
    }
}