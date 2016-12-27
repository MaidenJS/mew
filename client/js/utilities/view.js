export default function view(section, template_url, data) {
    $.get(template_url, function(content) {
        document.getElementById(section).innerHTML = Handlebars.compile(content)(data);
    });
}