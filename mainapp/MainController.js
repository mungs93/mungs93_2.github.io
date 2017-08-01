app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'mainapp/home1.jpg', 
	    title: 'MOVE', 
	    developer: 'MOVE, Inc.', 
	    price: 0.99 
	  }, 
	  { 
	    icon: 'mainapp/home2.jpg', 
	    title: 'Shutterbugg', 
	    developer: 'Chico Dusty', 
	    price: 2.99 
	  },
	  {
	    icon: 'mainapp/home3.jpg',
	    title: 'Gameboard',
	    developer: 'Armando P.',
	    price: 1.99
	  },
	  {
	    icon: 'mainapp/home4.jpg',
	    title: 'Forecast',
	    developer: 'Forecast',
	    price: 1.99
	  }
	];
}]);