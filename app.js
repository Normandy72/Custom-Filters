(function(){
    'use strict';

    angular.module('FilterApp', [])
    .controller('FilterController', FilterController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

    FilterController.$inject = ['$scope', 'lovesFilter'];

    function FilterController($scope, lovesFilter){
        $scope.sayMessage = function(){
            var message = 'Kate likes to eat healthy snacks at night!';
            return message;
        };

        $scope.sayLovesMessage = function(){
            var message = 'Kate likes to eat healthy snacks at night!';
            message = lovesFilter(message);
            return message;
        };
    };

    function LovesFilter(){
        return function(input){
            input = input || "";    // check if input actually exists
            input = input.replace('likes', 'loves');
            return input;
        };
    };

    function TruthFilter(){
        return function(input, target, replace){
            input = input || "";    // check if input actually exists
            input = input.replace(target, replace);
            return input;
        };
    };
})();