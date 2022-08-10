var SDK = lpTag.agentSDK || {};
$(function() {
    SDK.init({notificationCallback: notificationCB});
});
function notificationCB(data){
    logger(data);
}

var app = angular.module('example2', [ 'jsonFormatter']);

app.controller('MainCtrl', function ($scope) {
    $scope.bindInput = "SDE.personalInfo.name";
    $scope.getResult = {};
    $scope.bindResult = {};

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
            var updateCallback = function(data) {
            // Do something with the returning data
            var path = data.key;
            var value = data.newValue;
            data.newValue = "Steve";
            value = data.newValue;
            SDE.personalInfo.name = "James";
            console.log(path);
            console.log(value);
            };
    // handle the bind/unbind buttons and callback
    $scope.bind = function(ev){
        //SDK.bind($scope.bindInput, $scope.bindCB, $scope.bindCB);
        SDK.bind($scope.bindInput, updateCallback);
    };
    $scope.unbind = function(ev){
        SDK.unbind($scope.bindInput, $scope.bindCB, $scope.bindCB);
    };
    $scope.bindCB = function (data) {
        console.log(JSON.stringify(data));
        if (data) {
            $scope.bindResult = data;
            SDE.personalInfo.name
            $scope.$apply();
        }
    };
} );
