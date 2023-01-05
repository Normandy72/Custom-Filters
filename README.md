### Steps to create customs filters
#### Step 1
Define Filter Factory Function
```
function customFilterFactory(){
    return function(input){
        // change input
        return changedInput;
    };
}
````
#### Step 2
Register Filter Factory With Module
```
angular.module('app', [])
.controller('ctrl', Ctrl);
.filter('custom', customFilterFactory);
```
#### Step 3
(Javascript) Inject it with *name*Filter
```
Ctrl.$inject = ['$scope', 'customFilter'];
function Ctrl($scope, customFilter){
    var msg = 'Some input';
    customFilter(msg);
};
```