/**
 * @api {post} /items/ Create a new ITem
 * @apiName CreateItem
 * @apiGroup Item
 *
 *
 * @apiParam {Number} size Size of the Item
 * @apiParam {Number} stock Stock of the Item
 * @apiParam {String} colour Colour of the Item
 * @apiParam {Number} price Price of the Item
 * @apiParam {Number} productID ID of the Item's Product
 * @apiParam {Number} createdAt Vendor time of creation (UNIX)
 * @apiParam {Number} updatedAt Vendor time of last update (UNIX)
 *
 * @apiSuccess {Number} id ID of the Item
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "InvalidItemInfo"
 *     }
 */
