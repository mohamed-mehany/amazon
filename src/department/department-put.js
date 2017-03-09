/**
 * @api {put} /departments/ Update an existing Department
 * @apiName UpdateDepartment
 * @apiGroup Department
 *
 * @apiParam {String} name Name of the Department
 * @apiParam {String} description Description of the Department
 *
 * @apiSuccess {Number} id ID of the Department
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidDepartmentName"
 *     }
 */
