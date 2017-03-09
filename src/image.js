/**
 * @api {get} /image/:id Request Image information
 * @apiName GetImage
 * @apiGroup Image
 *
 * @apiParam {Number} id Image's unique ID
 *
 * @apiSuccess {String} file File name of the image
 * @apiSuccess {Number} createdAt Image time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Image time of last update (UNIX)
 * @apiSuccess {Number} userId Author's User Id
 * @apiSuccess {Object} item Image's Item
 * @apiSuccess {Number} item.id Item ID
 * @apiSuccess {String} items.productId Item Product ID
 * @apiSuccess {Number} items.createdAt Item time of buying (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

 /**
  * @api {Post} /image/ Create a new Image
  * @apiName CreateImage
  * @apiGroup Image
  *
  * @apiParam {Number} id Image's unique ID
  *
  * @apiParam {String} file File name of the image
  * @apiParam {Number} userId Author's User Id
  * @apiParam {Object} item Image's Item
  * @apiParam {Number} item.id Item ID
  * @apiParam {String} items.productId Item Product ID
  * @apiParam {Number} items.createdAt Item time of buying (UNIX)
  *
  * @apiSuccess {Number} id ID of the image
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       "error": "InvalidEmail"
  *     }
  */
