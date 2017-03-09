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
