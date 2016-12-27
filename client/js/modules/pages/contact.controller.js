import renderView from '../../utilities/helpers';

export default function ContactController (parameter) {

    console.log('contact controller', parameter);

    renderView('js/views/contact.html', {
        first_name: 'John'
    });
    
}