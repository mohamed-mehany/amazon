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
