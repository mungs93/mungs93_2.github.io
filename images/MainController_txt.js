app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Our Community Projects'; 
  $scope.promo = 'Let\'s make meaningful and lasting changes around us';
  $scope.products = [
  	{ 
  		name: 'Fort Bend Pets Alive', 
    	price: 12,
    	pubdate: new Date('2017', '05', '01'), 
    	cover: 'images/FBPA.jpg',
    	likes: 0,
  	}, 
  	
  	
  	{ 
    	name: 'Saving Our Companion Animals', 
    	price: 12, 
    	pubdate: new Date('2017', '05', '01'), 
    	cover: 'images/SOCA.png',
    	likes: 0,
  	}, 
  	{ 
    	name: 'Restoration of natural habitat & creation of eco-friendly site of natural exploration along the San Marcos River', 
    	price: 12,
    	pubdate: new Date('2017', '05', '01'), 
    	cover: 'images/San_Marcos_mod.png',
    	likes: 0,
  	}, 
  	  	{ 
    	name: 'Fort Bend Apartment Locators service for residents of the great community', 
    	price: 12,
    	pubdate: new Date('2017', '05', '01'), 
    	cover: 'images/image_1.png',
    	likes: 0,
  	}, 
  	{ 
    	name: 'Continued TextbookConsultants service for future semesters and students', 
    	price: 5,
    	pubdate: new Date('2017', '05', '01'), 
    	cover: 'images/TB_logo.jpg',
    	likes: 0,
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);