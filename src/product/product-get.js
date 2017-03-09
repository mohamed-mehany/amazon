/**
 * @api {get} /product/:id Request Product information
 * @apiName GetProduct
 * @apiGroup Product
 *
 * @apiParam {Number} id Product's unique ID
 *
 * @apiSuccess {String} name Firstname of the User
 * @apiSuccess {String} description Description of the product
 * @apiSuccess {Number} createdAt Product time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Product time of last update (UNIX)
 * @apiSuccess {Object[]}  items Array of different types of the same product
 * @apiSuccess {Number} items.size Item's Size
 * @apiSuccess {String} items.color Item's color
 * @apiSuccess {Double} items.price Item's Price
 * @apiSuccess {Number} items.createdAt Item time of creation (UNIX)
 * @apiSuccess {Number} vendorId Vendor ID
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
