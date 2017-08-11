//'use strict';
function loginFormController($scope, $element, $attrs){
	
	var lfc=this;
	var _namepass=[
	{
		'name': 'kevin',
		'password': '12kev'
	},
	{
		"name": "mary12",
		"password": "12b_36A"
	},
	{
		"name": "lanlord#",
		"password": "lan1lama"
	}
	];
	
	$scope.result='';
	
	
	$scope.click=function(){
		var p=$scope.pass;
		var n=$scope.name;
		for (var i=0; i< _namepass.length;i++){
			console.log(_namepass[i].name+' '+n);
			if ((angular.equals(_namepass[i].name,n)) && (angular.equals(_namepass[i].password,p))){
				$scope.result=n+' '+p;
				break;
			}
			else if(i==_namepass.length-1){
				$scope.result='try again! incorrect credentials!';
				
			}
		}
		
		
	};
	
	$scope.cancel=function(){
		$scope.name='';
		$scope.pass='';
		$scope.result='';
	};
		
}

app.component('loginForm',{
	templateUrl: 'loginForm.html',
	controller: loginFormController,
	bindings: {
	name: '<',
	pass: '<',
	result: '&',
    onDelete: '&',
    onUpdate: '&'
  }
	
});