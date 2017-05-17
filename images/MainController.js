app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'images/FBPA.jpg', 
	    title: 'Fort Bend Pets Alive', 
	    developer: 'FORT BEND PETS ALIVE! is a non-profit, 501(C)3 organization, dedicated to helping make Fort Bend a no-kill community through programs such as adoptions, education and community outreach, low cost spay and neuter surgeries, fostering, Positive Alternatives to Shelter Surrender (PASS), and rescuing from euthanasia lists.', 
	    price: 15.00 
	  }, 
	  { 
	    icon: 'images/peanut.png', 
	    title: 'A Place for Peanuts', 
	    developer: 'A Place for Peanut was founded in January 2016 so that others can experience the joy of spending quality time with a horse. But it is also a sanctuary for horses who would otherwise face unspeakable plights.', 
	    price: 15.00
	  },
	  {
	    icon: 'images/image_1_logo.png',
	    title: 'Fort Bend Apartment Locators',
	    developer: 'FBAL, headquartered out of Fort Bend County, offers apartment locating on Houston metro areas, as well as many primo locations in the State of Texas.',
	    price: 15.00
	  },
	  {
	    icon: 'images/TB_logo.png',
	    title: 'Textbook Consultants',
	    developer: 'TextbookConsultants connects students, parents, and instructors to competitive and market-efficient price of textbooks.',
	    price: 5.00
	  }
	];
}]);