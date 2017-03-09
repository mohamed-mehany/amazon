/**
 * @api {get} /order/:id Request Order information
 * @apiName GetOrder
 * @apiGroup Order
 *
 * @apiParam {Number} id Order's unique ID
 *
 * @apiSuccess {Number} deliveryStatus Status of the delivery
 * @apiSuccess {Number} paymentStatus Status of the payement
 * @apiSuccess {Number} createdAt Order time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Order time of last update (UNIX)
 * @apiSuccess {Number} userId Ordered User ID
 * @apiSuccess {Number} bankingInfoId Banking Info ID
 * @apiSuccess {Object[]} items Array of items in this order
 * @apiSuccess {Number} items.id Item ID
 * @apiSuccess {String} items.productId Item Product ID
 * @apiSuccess {Number} items.createdAt Item time of adding (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
 /**
  * @api {Post} /orders/ Create a new Order
  * @apiName CreateOrder
  * @apiGroup Order
  *
  * @apiParam {Number} deliveryStatus Status of the delivery
  * @apiParam {Number} paymentStatus Status of the payement
  * @apiParam {Number} userId Ordered User ID
  * @apiParam {Number} bankingInfoId Banking Info ID
  *
  * @apiSuccess {Number} id ID of the Order
  *
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       "error": "InvalidName"
  *     }
  */
  /**
   * @api {Post} /order/items/ Create a new Item for an order
   * @apiName CreateOrderItem
   * @apiGroup Order
   *
   *
   * @apiParam {Number} orderId Order ID
   * @apiSuccess {Number} itemId Item ID
   * @apiSuccess {String} productId Item Product ID
   * @apiSuccess {Number} createdAt Item time of buying (UNIX)
   *
   * @apiSuccess {Number} id ID of the OrderItem
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "error": "ItemNotFound"
   *     }
   */
   /**
    * @api {Put} /order/:orderId Update an existing Order
    * @apiName UpdateOrder
    * @apiGroup Order
    *
    * @apiParam {Number} deliveryStatus Status of the delivery
    * @apiParam {Number} paymentStatus Status of the payement
    * @apiParam {Number} userId Ordered User ID
    * @apiParam {Number} bankingInfoId Banking Info ID
    *
    * @apiSuccess {Number} id ID of the Order
    *
    * @apiErrorExample {json} Error-Response:
    *     HTTP/1.1 400 Bad Request
    *     {
    *       "error": "InvalidName"
    *     }
    */
