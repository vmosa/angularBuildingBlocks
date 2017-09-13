'use strict' 
function prodListController($scope, $element, $attrs, $http, $location){
var ctrl=this;
ctrl.products=[
{
	imageUrl: 'product1.jpg',
	price: '100',
	specs: {
		height: '100 cm',
		weight: '4 kg'
		
	}
},
{
	imageUrl: 'product1.jpg',
	price: '108',
	specs: {
		height: '96 cm',
		weight: '3 kg'
		
	}
}
];
}

app.component('productList',{
templateUrl:'productList.html',
controller: prodListController
});