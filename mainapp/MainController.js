app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'images/Harvard.jpg', 
	    title: 'Harvard', 
	    developer: 'Memorial Church, Cambridge, MA.', 
	    price: ,
	    link: "TC_Textbooks.html"
	  }, 
	  { 
	    icon: 'images/Yale2.jpg', 
	    title: 'Yale', 
	    developer: 'Chico Dusty', 
	    price: ,
	    link: "TC_Textbooks.html"	    
	  },
	  {
	    icon: 'images/Stanford2.jpg',
	    title: 'Stanford',
	    developer: 'Memorial Church, Stanford, CA.',
	    price: ,
	    link: "TC_Textbooks.html"	    
	  },
	  {
	    icon: 'images/Penn2.jpg',
	    title: 'Penn',
	    developer: 'College Hall, Philadelphia, PA.',
	    price: ,
	    link: "TC_Textbooks.html"	    
	  },
	  {
	    icon: 'images/All2.jpg',
	    title: 'More Colleges',
	    developer: 'Silverman Hall, Philadelphia, PA',
	    price: ,
	    link: "TC_Textbooks.html"
	  }
	];
}]);