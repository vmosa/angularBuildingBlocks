app.controller('questionController',['$scope','$http','$location',function($scope,$http,$location){
	var qc=this;
	var questions=[
	{
	question:'What is the perimeter of a circle with radius r?',
	options:['2πr','πr','πr^2','none of the above'],
	answer:'2πr'
	}
	];
	$scope.question=questions[0].question;
	$scope.options=questions[0].options;
	$scope.qButton='Next question';
	
	
	}
	]);