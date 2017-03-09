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
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
