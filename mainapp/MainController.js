app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'images/Harvard.jpg', 
	    title: 'Harvard', 
	    developer: 'Memorial Church, Cambridge, MA.', 
	    developer2: '1340 classes and 1360 books', 
	    price: ,
	    link: "TC_Textbooks.html"
	  }, 
	  { 
	    icon: 'images/Yale2.jpg', 
	    title: 'Yale', 
	    developer: 'Chico Dusty', 
	    developer2: '1340 classes and 1360 books', 
	    price: ,
	    link: "TC_Textbooks.html"	    
	  },
	  {
	    icon: 'images/Stanford2.jpg',
	    title: 'Stanford',
	    developer: 'Memorial Church, Stanford, CA.',
	    developer2: '1340 classes and 1360 books', 
	    price: ,
	    link: "TC_Textbooks.html"	    
	  },
	  {
	    icon: 'images/Penn2.jpg',
	    title: 'Penn',
	    developer: 'College Hall, Philadelphia, PA.',
	    developer2: '1340 classes and 1360 books', 
	    price: ,
	    link: "TC_Textbooks.html"	    
	  },
	  {
	    icon: 'images/All2.jpg',
	    title: 'More Colleges',
	    developer: 'Silverman Hall, Philadelphia, PA',
	    developer2: '1340 classes and 1360 books', 
	    price: ,
	    link: "TC_Textbooks.html"
	  }
	];
}]);