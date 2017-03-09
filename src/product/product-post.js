/**
 * @api {Post} /products/ Create a new Product
 * @apiName CreateProduct
 * @apiGroup Product
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
/**
 * @api {Post} /product/:id/items Create a new Product Item
 * @apiName CreateProductItem
 * @apiGroup Product
 *
 * @apiParam {Number} id Product unique ID
 *
 * @apiParam {Number} size Item's Size
 * @apiParam {String} color Item's color
 * @apiParam {Double} price Item's Price
 * @apiParam {Number} vendorId Vendor ID
 *
 * @apiSuccess {Number} id ID of the Product
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "VendorNotFound"
 *     }
 */
