/**
 * @api {Post} /departments/ Create a new Department
 * @apiName CreateDepartment
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
