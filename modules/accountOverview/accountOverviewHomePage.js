'use strict';

app.controller('accountOverviewHomePageController', function($scope, $state,graphData,transactionDetails, accountInfo,onchangeData,completeGraph) {
        //functions, variables that can be accessed from the HTML come here
        console.log("hello");
        var accountOverviewHomePageVm = this;
        $scope.labels = ["JAN 2013", "FEB 2013", "MAR 2013", "APR 2013", "MAY 2013"];
        $scope.data = [150, 250, 100, 280, 320];
        return this;
        $scope.range = 10;
        $scope.rangeUpdate = function () {
		  $timeout(function () {
			$rootScope.$broadcast("setProgressBarValue", $scope.range);
		}, 200);
	};
    }
);
