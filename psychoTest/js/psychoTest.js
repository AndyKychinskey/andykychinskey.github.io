(function(){

	var app = angular.module("psychoTest", []);
	app.controller("psychoTestCtrl", ["$scope", "$http", "$sce", function($scope, $http, $sce){

			$scope.changeClass = 0;
			$scope.counter = 0;
			$scope.percentage = 0;
			$scope.forResultAns = -1;
			$scope.previousEl = document.getElementById("ul0");
			$scope.currentEl = 0;

			$scope.result = 0;
			$scope.userKeys = [];
			$scope.keys = [	
						[0,1,0],
						[1,1,0],
						[0,0,1],
						[0,0,1],
						[0,1,0],
						[0,0,1],
						[0,1,1],
						[0,0,1],
						[1,2,0],
						[0,1,0],
						[1,1,0],
						[1,0,1],
						[0,0,1],
						[1,0,0],
						[1,0,0],
						[0,1,1],
						[0,0,1],
						[1,0,0],
						[1,1,0],
						[1,1,0],
						[1,0,0],
						[1,0,0],
						[1,0,1],
						[1,1,0],
						[1,0,0],
						[0,1,0],
						[0,0,1],
						[1,1,0],
						[1,0,1],
						[0,1,0]
						];

			$http.get('testInfo.json').then(function(psychoTestData){
				$scope.testQuestions = psychoTestData.data;
				$scope.totalQuestions = $scope.testQuestions.length;
			});

			$scope.changeVarClass = function(){
				/* 
				   Code below works only for starting test,
				   no repeating, so invisible button "Start test!.."
				   inactive
				*/
				if($scope.changeClass === 0){
					$scope.changeClass++;
					var pFromStartPage = document.getElementById("startPage")
												 .getElementsByTagName("span")[1];
					pFromStartPage.style.cursor = "default";
				}
			};

			$scope.doNothing = function(){
				console.log("Hi from do nothing!..");
			};

			$scope.counterFunc = function(pIndex, index){
				console.log("$scope.counter: " + $scope.counter);
				console.log("$scope.totalQuestions: " + $scope.totalQuestions);
				console.log("$scope.keys[0].length: " + $scope.keys[0].length);
				if($scope.counter <= $scope.totalQuestions-1){
					$scope.counter++;

					$scope.percentage = (($scope.counter/$scope.totalQuestions)*100).toFixed(1);
					console.log("$scope.percentage: " + $scope.percentage);
					
					var innerArray = [0, 0, 0];
					innerArray[index] = 1;
					$scope.userKeys[pIndex] = innerArray;
					console.log($scope.userKeys);

					if($scope.counter === $scope.totalQuestions){
							for(var i=0; i<$scope.totalQuestions; i++){
								for(var j = 0; j < $scope.keys[0].length; j++){
									$scope.result += $scope.keys[i][j]*$scope.userKeys[i][j];
								}
							}
						if($scope.result >= 2 && $scope.result <= 10){
								$scope.forResultAns = "низкая мотивация к защите.";							
							}else if($scope.result >= 11 && $scope.result <= 16){
								$scope.forResultAns = "средний уровень мотивации.";
							}else if($scope.result >= 17 && $scope.result <= 20){
								$scope.forResultAns = "высокий уровень мотивации.";
							}else if($scope.result >20){
								$scope.forResultAns = "слишком высокий уровень мотивации к избеганию неудач, защите.";
							}
					console.log("$scope.counter: " + $scope.counter);
					console.log("$scope.forResultAns: " + $scope.forResultAns);
					//alert("Your result is: " + $scope.result);
				}
			}
			};
/*
			$scope.counterFunc = function(){
				console.log($scope.totalQuestions);
				console.log($scope.previousEl);

				$scope.previousEl = document.getElementById("ul" + $scope.counter);
				$scope.counter++;
				$scope.currentEl = document.getElementById("ul" + $scope.counter);

				if($scope.counter < $scope.totalQuestions){
					$scope.previousEl.style.display = "none";
					//$scope.currentEl = document.getElementById("ul" + $scope.counter);
					$scope.currentEl.style.display = "block";
					//$scope.previousEl = $scope.currentEl;
									console.log($scope.counter);
				}else{
					console.log("Out of range!");
				}
			};
*/

			
		}]);
})();