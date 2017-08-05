app.directive('appInfo', function() { 
  return { 
    restrict: 'EA', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'mainapp/appInfo.html'    
  }; 
});


    
    