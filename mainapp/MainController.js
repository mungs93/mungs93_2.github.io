app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'images/Harvard.jpg', 
	    title: 'Harvard', 
	    developer: 'Memorial Church, Cambridge, MA.', 
	    link: "T_Search.html"
	  }, 
	  { 
	    icon: 'images/Yale2.jpg', 
	    title: 'Yale', 
	    developer: 'Arch Iron Gate, New Haven, CT.', 
	    link: "T_Search.html"	    
	  },
	  {
	    icon: 'images/Stanford2.jpg',
	    title: 'Stanford',
	    developer: 'Memorial Church, Stanford, CA.',
	    link: "T_Search.html"	    
	  },
	  {
	    icon: 'images/Penn2.jpg',
	    title: 'Penn',
	    developer: 'College Hall, Philadelphia, PA.',
	    link: "T_Search.html"	    
	  },
	  {
	    icon: 'images/All2.jpg',
	    title: 'More Colleges',
	    developer: 'Silverman Hall, Philadelphia, PA',
	    link: "T_Search.html"
	  }
	];
}]);