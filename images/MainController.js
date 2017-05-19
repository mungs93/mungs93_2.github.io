app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    "icon": 'images/FBPA.jpg', 
	    "title": 'Fort Bend Pets Alive', 
	    "developer": 'FORT BEND PETS ALIVE! is a non-profit, 501(C)3 organization, dedicated to helping make Fort Bend a no-kill community through programs such as adoptions, education and community outreach, low cost spay and neuter surgeries, fostering, Positive Alternatives to Shelter Surrender (PASS), and rescuing from euthanasia lists.', 
		"url": "https://www.fortbendpetsalive.org",
		"url2": "https://www.facebook.com/FortBendPetsAlive/",
		"url3": "https://www.fortbendpetsalive.org/donations/",
	    "price": "Learn More" 
	  }, 
	  { 
	    "icon": 'images/peanut.png', 
	    "title": 'A Place for Peanut', 
	    "developer": 'A Place for Peanut was founded in January 2016 so that others can experience the joy of spending quality time with a horse. But it is also a sanctuary for horses who would otherwise face unspeakable plights.', 
	    "url": "https://www.aplaceforpeanut.com",
	    "url2": "https://www.facebook.com/aplaceforpeanut/",
	    "url3": "https://www.paypal.me/APFP",
	    "price": "Learn More" 
	  },
	  {
	    "icon": 'images/image_1_logo.png',
	    "title": 'Fort Bend Apartment Locators',
	    "developer": 'FBAL, headquartered out of Fort Bend County, offers apartment locating in Houston metro areas, as well as many primo locations in the State of Texas.',
	    "url": "https://www.fortbendapartmentlocators.com",
		"url2": "https://www.facebook.com/Fort-Bend-Apartment-Locators-170813793441790",
		"url3": "https://www.fortbendapartmentlocators.com",
	    "price": "Learn More" 
	  },
	  {
	    "icon": 'images/TB_logo.png',
	    "title": 'Textbook Consultants',
	    "developer": 'TextbookConsultants connects students, parents, and instructors to competitive and market-efficient price of textbooks.',
	    "url": "https://textbookconsultants.com",
	    "url2": "https://www.facebook.com/textbookconsultants",
	    "url3": "https://www.paypal.com/donate/?token=GmcFyeJHCDpcdDaSvUdzVVqvmJ4gVoIjvFSDRPaDGL9-zwPjgG8cyIlAwmtBOfzC9QATm0",
	    "price": "Learn More" 
	  }
	];
}]);