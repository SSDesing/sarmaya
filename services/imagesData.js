app.factory('imageData', function($q, $timeout, $http) {
    var imageDetails = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('json/homePage/homePage.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return imageDetails;
});
