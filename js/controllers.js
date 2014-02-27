/**
 * Created by Kendra on 2/26/14.
 */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
    $scope.name = "Jake is a loser";
    $http.get('www.lolslashplayed.com:4567/played/na/Abecbu')
        .then(function(res){
            $scope.league = res.data;
        });
});