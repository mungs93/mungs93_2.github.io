app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'mainapp/appInfo.html' 
  }; 
});