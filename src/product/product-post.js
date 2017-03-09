/**
 * @api {Post} /products/ Create a new Product
 * @apiName CreateProduct
 * @apiGroup Product
 *
 * @apiParam {String} name Product name
 * @apiParam {String} description Description of the product
 * @apiParam {Number}  department Product Department ID
 *
 * @apiSuccess {Number} id ID of the Product
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidName"
 *     }
 */
