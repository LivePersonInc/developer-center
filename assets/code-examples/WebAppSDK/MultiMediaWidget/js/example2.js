var SDK = lpTag.agentSDK || {};
$(function() {
    SDK.init({notificationCallback: notificationCB});
});
function notificationCB(data){
    logger(data);
}

var app = angular.module('example2', [ 'jsonFormatter']);

app.controller('MainCtrl', function ($scope) {
    $scope.bindInput = "";
    $scope.getResult = {};
    $scope.bindResult = {};
    $scope.myString = "";
    $scope.myString2 = "";
    
    $scope.command2 = function(ev) {
        $scope.myString = "";
        $scope.myString2 = "";
       $scope.myString = '<a href=\"' + $scope.commandInput + '\"><img src=\"' + $scope.commandInput +'\" style="max-width: 100%;\"></a>';
        SDK.command('Write ChatLine',{text:$scope.myString},$scope.cb);
      };
      
      $scope.command4 = function(ev) {
          $scope.myString = "";
          var urlTest = document.getElementById("fileURL").innerHTML;
          console.log(urlTest);
        $scope.myString = '<a href=\"' + urlTest + '\" target="_blank">Click Here For File</a>';
        SDK.command('Write ChatLine',{text:$scope.myString},$scope.cb);
      };

    $scope.command3 = function(ev){
        $scope.myString = "";
        $scope.myString2 = "";
        // add code to remove part of url string here
            var vidIDString = $scope.commandInput;
            vidIDString = vidIDString.split("?v=").pop();
            vidIDString = "http://img.youtube.com/vi/" + vidIDString + "/0.jpg";
            $scope.myString2 = vidIDString;
            $scope.myString = '<a href=\"' + $scope.commandInput + '\"><img src=\"' + $scope.myString2 +'\" style="max-width: 100%;\"></a>';
        SDK.command('Write ChatLine',{text:$scope.myString},$scope.cb);
    };
    
    $scope.command = function(ev){
        SDK.command('Write ChatLine',{text:$scope.commandInput},$scope.cb);
    };
    $scope.cb = function (data) {
        if (data) {
            console.log(JSON.stringify(data));
        }
    };
    // handle the get button and callback
    $scope.get = function(ev){
        //SDK.command('Write ChatLine',{text:"commaneVal"},$scope.cb);
        SDK.get($scope.getInput, $scope.getCB, $scope.getCB);
    };
    $scope.getCB = function (data) {
        if (data) {
            $scope.getResult = data;
            $scope.$apply();
        }
    };
    // handle the bind/unbind buttons and callback
    $scope.bind = function(ev){
        SDK.bind($scope.bindInput, $scope.bindCB, $scope.bindCB);
    };
    $scope.unbind = function(ev){
        SDK.unbind($scope.bindInput, $scope.bindCB, $scope.bindCB);
    };
    $scope.bindCB = function (data) {
        console.log(JSON.stringify(data));
        if (data) {
            $scope.bindResult = data;
            $scope.$apply();
        }
    };
} );
