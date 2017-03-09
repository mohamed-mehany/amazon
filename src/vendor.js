/**
 * @api {get} /vendor/:id Request Vendor information
 * @apiName GetVendor
 * @apiGroup Vendor
 *
 * @apiParam {Number} id Vendor's unique ID
 *
 * @apiSuccess {Number} userID ID of the Vendor's User
 * @apiSuccess {Number} createdAt Vendor time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Vendor time of last update (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "VendorNotFound"
 *     }
 */

 /**
  * @api {Post} /vendors/ Create a new Vendor
  * @apiName CreateVendor
  * @apiGroup Vendor
  *
  * @apiParam {Number} userID ID of the Vendor's User
  *
  * @apiSuccess {Number} id ID of the Vendor
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       "error": "InvalidUserID"
  *     }
  */
  
  /**
   * @api {put} /vendor/:id Update an existing Vendor
   * @apiName UpdateVendor
   * @apiGroup Vendor
   *
   * @apiParam {Number} id ID of the Vendor
   * @apiParam {Number} userID ID of the Vendor's User
   *
   * @apiSuccess {Number} id ID of the Vendor
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "error": "InvalidVendorIDOrUserID"
   *     }
   */
