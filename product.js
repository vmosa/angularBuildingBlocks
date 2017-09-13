'use strict' 
function prodController($scope, $element, $attrs){
var ctrl=this;
ctrl.click=function(){
	$location.path('/questions');
};
}

app.component('product',{
templateUrl:'product.html',
controller: prodController,
bindings:{
	prod: '<'
}


});