/**
 * @api {Put} /product/:id Update a Product
 * @apiName UpdateProduct
 * @apiGroup Product
 *
 * @apiParam {Number} id Product unique ID
 *
 * @apiParam {String} name Product name
 * @apiParam {String} description Description of the product
 *
 * @apiSuccess {Number} id ID of the Product
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidName"
 *     }
 */
