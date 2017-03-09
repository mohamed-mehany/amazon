/**
 * @api {get} /product/:id Request Product information
 * @apiName GetProduct
 * @apiGroup Product
 *
 * @apiParam {Number} id Product's unique ID
 *
 * @apiSuccess {String} name Product name
 * @apiSuccess {String} description Description of the product
 * @apiSuccess {Number} createdAt Product time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Product time of last update (UNIX)
 * @apiSuccess {Number} departmentId Product Department ID
 * @apiSuccess {Number} vendorId Vendor ID
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

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
  
  /**
   * @api {Put} /product/:id Update a Product
   * @apiName UpdateProduct
   * @apiGroup Product
   *
   * @apiParam {Number} id Product unique ID
   *
   * @apiParam {String} name Product name
   * @apiParam {String} description Description of the product
   * @apiParam {Number}  department Product Department ID
   *
   * @apiSuccess {Number} id ID of the Product
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "error": "InvalidName"
   *     }
   */
