import renderView from '../../utilities/helpers';
import view from '../../utilities/view';
import getJSON from '../../utilities/promise';

export default function AccountController (id, param2) {

    getJSON('../api/account.json')
        .then((data) => {
            view('app', 'js/modules/account/account.html', {
                first_name: data.first_name,
                last_name: data.last_name,
                user_id: id
            });
        });

}