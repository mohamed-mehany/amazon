/**
 * @api {get} /department/:id Request Department information
 * @apiName GetDepartment
 * @apiGroup Department
 *
 * @apiParam {Number} id Department's unique ID
 *
 * @apiSuccess {String} name Name of the Department
 * @apiSuccess {String} description Description of the Department
 * @apiSuccess {Number} createdAt Department time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Department time of last update (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DepartmentNotFound"
 *     }
 */
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
  /**
   * @api {put} /department/:id Update an existing Department
   * @apiName UpdateDepartment
   * @apiGroup Department
   *
   * @apiParam {Number} id ID of the Department
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
