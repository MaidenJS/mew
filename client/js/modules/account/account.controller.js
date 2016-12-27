import renderView from '../utilities/helpers';

export default function AccountController (param1, param2) {
    "use strict";

    console.log('account controller', param1, param2);

    renderView('js/views/account.html', {
        first_name: 'John'
    });

}