import renderView from '../../utilities/helpers';

export default function AboutController () {

    renderView('js/modules/pages/about.html', {
        first_name: 'John'
    });
    
}

