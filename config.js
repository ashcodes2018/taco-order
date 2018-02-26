(function() {
  angular
  .module("taco")
  .config(function($routeProvider) {
    $routeProvider
      .when("/displayorder",{
        template:"<orderFormDisplay-component></orderFormDisplay-component>"
      })
      .when("/takeorder",{
        template:"<orderForm-component></orderForm-component>"
      })
      .otherwise("/takeorder",{
        template:"<orderForm-component></orderForm-component>"
      })
    });

})();
