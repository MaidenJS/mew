/**
 * Core component to the framework
 * 
 * @param templatePath
 * @param data
 */
export default function renderView(templatePath, data) {
    //window.location.reload();
    $.ajax({
        url: templatePath,
        success: function(content){
            document.getElementById('app').innerHTML = content;
        },
        timeout: 1000 //in milliseconds
    });
}

