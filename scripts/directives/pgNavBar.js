angular.module("QuickPsrApp").directive('pgNavBar', function(){
    return {
        replace: true,
        restrict: "E",
        templateUrl: "views/templates/pgNavBar.html",
        controller: function($scope, $location){
            $scope.isPage = function(name){
                return new RegExp("/" + name + "($|/)").test($location.path());
            };
        }
    };
});
