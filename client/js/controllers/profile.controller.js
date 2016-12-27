function ProfileController () {

    // do some shit here
    new ProfileModel()
        .getById(1)
        .then(function(data) {
            document.querySelector('#content').innerHTML = (data.first_name);
            return data;
        })
        .then(function(data) {
            console.log(data);
        });
    
}