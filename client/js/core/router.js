export default function Router(config) {
    var self = this;
    var routeNames = [];

    self.add = function (routeName) {
        routeNames.push(routeName);
    };

    self.action = function (fragementName) {
        for (let i = 0; i < routeNames.length; i++) {
            if (routeNames[i]['name'] == fragementName) {
                //console.log(routeNames[i]['name'], ' is defined');
                if ( typeof routeNames[i]['controller'] == 'string' ) {
                    window[routeNames[i]['controller']]();
                }
                else {
                    routeNames[i]['controller']();
                }
            }
        }
    };

    self.getAllRoutes = function() {
        return routeNames;
    };
}