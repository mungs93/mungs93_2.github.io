app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Our Community Projects'; 
  $scope.promo = 'Let\'s make meaningful and lasting changes around us';
  $scope.products = [
  	{ 
    	name: 'Restoration of natural habitat & creation of eco-friendly site of natural exploration along the San Marcos River', 
    	price: 12,
    	pubdate: new Date('2017', '03', '31'), 
    	cover: 'images/San_Marcos_River.jpg',
    	likes: 0,
  	}, 
  	{ 
    	name: 'Preservation of natural habitat & animal species', 
    	price: 10, 
    	pubdate: new Date('2017', '02', '21'), 
    	cover: 'images/butterfly.jpg',
    	likes: 0,
  	}, 
  	{ 
    	name: 'Assisting seniors with moving homes and other daily tasks', 
    	price: 10,
    	pubdate: new Date('2017', '04', '01'), 
    	cover: 'images/habitat.jpg',
    	likes: 0,
  	}, 
  	{ 
    	name: 'Continued TextbookConsultants service for future semesters and students', 
    	price: 5,
    	pubdate: new Date('2017', '01', '01'), 
    	cover: 'images/TB_logo.jpg',
    	likes: 0,
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
}]);