function PagesController () {

    this.home = function () {

        var data = {
            name: 'John Doe'
        };

        $.get("templates/home.html", function (content) {
            $("#content").html(content);
        })
    };

}

export default function AboutController () {
    renderView('js/views/about.html', {
        first_name: 'John'
    });
}