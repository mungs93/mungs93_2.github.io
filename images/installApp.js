app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {
          info: '='
    },
    templateUrl: 'images/installApp.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Website",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active')
        if(scope.installed) {
          scope.buttonText = "Website";
          scope.installed = false;
        } else {
          scope.buttonText = "Thank you!";
          scope.installed = true;
        }
      }
    }
  };
});