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
