//app.controller("securityController",[$scope],function($scope))
'use strict';

app.controller('transactionsController', function($scope, $state,graphData,transactionDetails, accountInfo,onchangeData,completeGraph) {

    var transactionsVm = this;
        transactionsVm.tab = 1;
        $scope.graphs = 0;
        transactionsVm.heading = "TRANSACTION DETAILS";
        $scope.messagesVisible = true;

    //console.log($scope.healthData);


    transactionsVm.sortType = 'tagName'; // set the default sort type
    transactionsVm.sortReverse = false; // set the default sort order
    transactionsVm.searchText = ''; // set the default search/filter term


    transactionDetails.fetch().then(function(data) {
        transactionsVm.transactionDetails = data;
    })

    accountInfo.fetch().then(function(data) {
        transactionsVm.accountDetails = data;

    })
    transactionsVm.update = function() {
        onchangeData.fetch().then(function(data) {
            transactionsVm.transactionDetails = data;
        })


    }
    transactionsVm.labels = ["shop", "Utilities", "Food", "phone", "travel"];
    transactionsVm.data = [250, 150, 200, 180, 320];
    $scope.labels = ["JAN 2013", "FEB 2013", "MAR 2013", "APR 2013", "MAY 2013"];
    $scope.data = [150, 250, 100, 280, 320];


    transactionsVm.download = function() {
        $state.go('accountOverviewHomePage');
    }

    transactionsVm.tabFirst = function(){
      $scope.graphs = 0;
      transactionsVm.tab = 1;

    }

    transactionsVm.tabSecond = function(){
      transactionsVm.tab = 2;
      graphData.fetch().then(function(data) {
            transactionsVm.graphTable = data;
      })
    }
    $scope.overall = function(){
        $scope.graphs=1;
        completeGraph.fetch().then(function(data) {
              transactionsVm.completeGraph  = data;
        })
        $scope.labels = ["JAN 2013", "FEB 2013", "MAR 2013", "APR 2013", "MAY 2013"];
        $scope.data = [150, 250, 100, 280, 320];


    }

         transactionsVm.pie="doughnut";
         transactionsVm.varr="chart chart-doughnut graph-circle";
         transactionsVm.myDynamicClass ="chart chart-doughnut graph-circle";

         $scope.categoryType= function(category){
           completeGraph.fetch().then(function(data) {
                 transactionsVm.completeGraph  = data;
           })
           $scope.category = category;
           //alert( $scope.category);

           for( var i = 0 ; i < transactionsVm.completeGraph.length ; i++){
           if($scope.category == transactionsVm.completeGraph[i].tagName){
             //console.log("Image URL " + gChats[i].img_url);
           $scope.labels = transactionsVm.completeGraph[i].labels;
             $scope.data = transactionsVm.completeGraph[i].data;
               $scope.graphs=1;
          }
          }
         }
});
