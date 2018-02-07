/**
 * 
 */

var app = angular.module("myApp",[]);
app.controller("empController",function($scope,$interval){
	$scope.x = "Before Time out"; 
	var myExampleData = {};
	var d2 = [];
	var d1 = [[0, 3], [4, 8], [8, 5], [9, 13]];

	myExampleData.constructLineChartData = function(r) {
		
		var i;

		for ( i = 0; i < r; i += 0.5) {
			d2.push([i, Math.sin(i)]);
		}
		return [d1,d2];
	};
	myExampleData.lineChartData = myExampleData.constructLineChartData(14);

	myExampleData.lineChartOptions = {
		xaxis : {
			minorTickFreq : 4
		},
		grid : {
			minorVerticalLines : true
		},
		selection : {
			mode : "x",
			fps : 30
		}
	};
	$scope.dashboardJSON = [{
		widgetTitle : "line Chart Widget",
		widgetId : "id003",
		widgetType : "chart",
		getDataBySelection : true,
		widgetContent : {
			data : myExampleData.lineChartData,
			options : myExampleData.lineChartOptions
		}
 	}];

	//basic initialization example
	$("#myDashboard").sDashboard({
		dashboardData : $scope.dashboardJSON
	});
	
 
	setTimeout(function(){
		d1.push([15,Math.sin(15)]);
		$scope.x = "After Timeout";
		$("#myDashboard").sDashboard({
			dashboardData : $scope.dashboardJSON
		});
		$scope.$digest();
	},3000);
	
	
});