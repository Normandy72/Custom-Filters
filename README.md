### Steps to create custom filters
#### Step 1
Define Filter Factory Function
```
function customFilterFactory(){
    return function(input){
        // change input
        return changedInput;
    };
}
```
#### Step 2
Register Filter Factory With Module
```
angular.module('app', [])
.controller('ctrl', Ctrl)
.filter('custom', customFilterFactory);
```
#### Step 3 (Javascript)
Inject it with *name*Filter
```
Ctrl.$inject = ['$scope', 'customFilter'];
function Ctrl($scope, customFilter){
    var msg = 'Some input';
    customFilter(msg);
};
```

***
### Steps to create custom filter that accepts additional custom arguments
#### Step 1
Define Filter (Factory) Function with custom arguments
```
function customFilterFactory(){
    return function(input, arg1){
        // change input
        return changedInput;
    };
}
```
#### Step 2
Register Filter (Factory) Function with custom arguments
```
angular.module('app', [])
.controller('ctrl', Ctrl)
.filter('custom', customFilterFactory);
```

#### Step 3 (Javascript)
Inject it with *name*Filter
```
Ctrl.$inject = ['$scope', 'customFilter'];
function Ctrl($scope, customFilter){
    var msg = 'Some input';
    customFilter(msg, 'some value');
};
```

#### Step 3 (HTML)
Use it as registered name
```
{{ "Hello" | custom }}
```
If it nessessory - pass extra arguments with `: arg`
```
{{ "Hello" | custom : arg1 : arg2 }}
```
If it nessessory - chaining filters in HTML
```
{{ "Hello" | custom | uppercase }}
```