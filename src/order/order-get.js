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
