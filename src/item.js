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

  /**
   * @api {post} /item/:id Update an existing Item
   * @apiName UpdateItem
   * @apiGroup Item
   *
   *
   * @apiParam {Number} id ID of the Item
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
