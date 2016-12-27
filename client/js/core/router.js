/**
 *
 * @param config
 * @constructor
 */
export default function Router(config) {
    var self = this;
    var routeNames = [];

    self.add = function (routeName) {
        routeNames.push(routeName);
    };

    self.action = function (fragmentName) {

        var at_least_one_route_exists = false;
        for (let i = 0; i < routeNames.length; i++) {
            let fragments = fragmentName.split("/");
            let named_urls = routeNames[i]['name'].split("/");

            var parameters = [];
            for (let i = 0; i < named_urls.length; i++) {
                if (named_urls[i].charAt(0) == ':') {
                    let parameter = fragments.splice(i, 1);
                    named_urls.splice(i, 1);
                    parameters = parameters.concat(parameter);
                }
            }

            if (arraysEqual(fragments, named_urls)) {
                console.log('fragment', fragments);
                console.log('named url', named_urls);
                console.log('parameters', parameters);
                console.log(arraysEqual(fragments, named_urls));

                //let param = routeNames[i]['name'].split("/")[1];
                routeNames[i]['controller'].apply(null, parameters);

                at_least_one_route_exists = true;
            }
        }

        if (! at_least_one_route_exists) {

            console.log('404 page, cuz no routes match');
            try {
                self.notFound();
            }
            catch (e) {

            }
        }
    };

    self.getAllRoutes = function() {
        return routeNames;
    };

    self.notFound = (obj) => {
        obj.controller();
    };

    function arraysEqual(arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }
}