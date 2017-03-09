/**
 * @api {get} /item/:id Request Item information
 * @apiName GetItem
 * @apiGroup Item
 *
 * @apiParam {Number} id Item's unique ID
 *
 * @apiSuccess {Number} size Size of the Item
 * @apiSuccess {Number} stock Stock of the Item
 * @apiSuccess {String} colour Colour of the Item
 * @apiSuccess {Number} price Price of the Item
 * @apiSuccess {Number} productID ID of the Item's Product
 * @apiSuccess {Number} createdAt Vendor time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Vendor time of last update (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ItemNotFound"
 *     }
 */
