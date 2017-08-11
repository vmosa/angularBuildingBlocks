//'use strict';
function loginFormController($scope, $element, $attrs, $http){
	
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
		$http.post('myurl',{username:n,password:p}).then(
			function(response){
				if (response.data.length>0){
					$scope.result='Successfully logged in';
				}
				else{
					$scope.result='try again! incorrect credentials!';
				}
			}).then(
			function(response){
				$scope.result='Error! The request could not be served! Error '+response.status;
			}
		)
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
