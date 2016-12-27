import renderView from '../utilities/helpers';

export default function AboutController () {
    renderView('js/views/about.html', {
        first_name: 'John'
    });
}

