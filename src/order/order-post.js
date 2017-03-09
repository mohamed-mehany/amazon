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
