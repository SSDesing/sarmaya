app.factory('transactionDetails', function($q, $timeout, $http) {
    var TransactionDetails = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('json/transactionInfo.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return TransactionDetails;
});

app.factory('accountInfo', function($q, $timeout, $http) {
    var AccountInfo = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('json/accountInfo.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return AccountInfo;
});

app.factory('onchangeData', function($q, $timeout, $http) {
    var OnchangeData = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('json/moreTransactions.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return OnchangeData;
});

app.factory('graphData', function($q, $timeout, $http) {
    var GraphData = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('json/graphData.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return GraphData;
});

app.factory('completeGraph', function($q, $timeout, $http) {
    var CompleteGraph = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('json/completeGraph.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return CompleteGraph;
});
