/**
 * @api {Put} /user/ Update an existing User
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiParam {String} name Firstname of the User
 * @apiParam {String} email Email of the User
 * @apiParam {String} address Address of the User
 * @apiParam {Number} dateOfBirth User date of birth (UNIX)
 * @apiParam {Number} gender Gender of the user
 *
 * @apiSuccess {Number} id ID of the User
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidEmail"
 *     }
 */
