(function() {

  var orderFormDisplayComponent={
    template:
    `<div class="display-form">
    <table>
        <tr>
          <th>Customer Name</th>
          <th>Taco Ordered</th>
        </tr>
        <tr ng-repeat="orderinfo in $ctrl.displaytheorder">
          <td>{{orderinfo.name}}</td>
          <td>{{orderinfo.tacotype}}</td>
        </tr>
    </table>
    </div>`,

    controller:function(OrderService){
      var $ctrl=this;
      $ctrl.displaytheorder = OrderService.getOrder();
    }
  }

angular
  .module("taco")
  .component("orderFormDisplayComponent",orderFormDisplayComponent);
})();
