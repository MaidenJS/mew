export default function getJSON(url) {
    var xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    });
}

