/**
 * @api {get} /department/:id Request Department information
 * @apiName GetDepartment
 * @apiGroup Department
 *
 * @apiParam {Number} id Department's unique ID
 *
 * @apiSuccess {String} name Name of the Department
 * @apiSuccess {String} description Description of the Department
 * @apiSuccess {Number} updatedAt Department time of creation (UNIX)
 * @apiSuccess {Number} createdAt Department time of creation (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DepartmentNotFound"
 *     }
 */
