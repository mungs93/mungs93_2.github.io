app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'images/installApp.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Learn More",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active')
        if(scope.installed) {
          scope.buttonText = "Learn More";
          scope.installed = false;
        } else {
          scope.buttonText = "Thank you!";
          scope.installed = true;
        }
      }
    }
  };
});