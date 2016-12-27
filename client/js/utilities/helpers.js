export default function renderView(templatePath, data) {
    $.get(templatePath, function (content) {
        $("#content").html(content);
    });
}

