(function() {
  function OrderService(){
      var orders=[];
      return {
      getOrder:getOrder,
      addOrder:addOrder
    }
  function getOrder()
  {
    return orders;
  }
  function addOrder(neworder)
  {
    orders.push(neworder);
  }
}
angular
  .module("taco")
  .factory("OrderService",OrderService);
})();
