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
