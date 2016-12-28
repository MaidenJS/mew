// Composition Root
import renderView from './utilities/helpers';
import view from './utilities/view';
import Router from './core/router';
import AboutController from './modules/pages/about.controller';
import ContactController from './modules/pages/contact.controller';
import AccountController from './modules/account/account.controller';
import getJSON from './utilities/promise';
import {Application} from './modules/app/app';
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
                renderView('js/modules/pages/home.html', {
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
            name: 'account/:id',
            controller: AccountController
        });

        router.add({
            name: 'login',
            controller: AccountController
        });

        router.add({
            name: 'register',
            controller: AccountController
        });

        router.add({
            name: 'profile',
            controller: function () {
                console.log('profile');
                let obj2 = function () {
                    let i = 0;

                    let add = function (num) {
                        i += num;
                        return this;
                    };

                    let sub = function (num) {
                        i -= num;
                        return this;
                    };

                    let print = function () {
                        console.log(i);
                    };

                    return {
                        add: add,
                        sub: sub,
                        print: print
                    }
                };

                let y = obj2();
                y.add(3).sub(1).print();


            }
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

        /**
         * filters and middle ware
         */
        /*        router.middleware({

        });*/

        let fragmentId = location.hash.substr(1);

        router.action(fragmentId);

        view('navbar', 'js/modules/navbar/navbar.html', {
            title: 'TITLE',
            body: 'BODY'
        });
    }
}

/**
 * bootstraping your app as a basis/registry to load the rest of your app
 */
export class App extends Application {

    constructor() {
        super('MEW');
        this.property = 'new property'
    }

    show(element) {
        this.titleBar.appendElement(element)
    }
}

export let application = new App();
application.show($('body'));