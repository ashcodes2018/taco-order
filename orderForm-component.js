(function() {
  var orderFormComponent={
    template:
    `<form class="order-form">
      <p>
      <label for="name">Customer Name</label>
      <input id="name" type="text" ng-model="$ctrl.foodorderinput.name" placeholder="name">
      </p>
      <p>
      <label for="tacochosen">Taco</label>
      <select id="tacochosen" ng-model="$ctrl.foodorderinput.tacotype">
          <option>Taco1</option>
          <option>Taco2</option>
          <option>Taco3</option>
      </select>
      </p>
      <p>
      <button ng-click="$ctrl.placeorder();"><a href="#!/displayorder">Place Order</button>
      </p>
    </form>`,
    controller: function(OrderService){
      var $ctrl=this;
      $ctrl.foodorderinput={};
      $ctrl.placeorder=function()
      {
        OrderService.addOrder($ctrl.foodorderinput);
      };
    }
  };
angular
  .module("taco")
  .component("orderFormComponent",orderFormComponent);

})();
