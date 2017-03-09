/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID
 *
 * @apiSuccess {String} name Firstname of the User
 * @apiSuccess {String} email Email of the User
 * @apiSuccess {Number} createdAt User time of creation (UNIX)
 * @apiSuccess {String} address Address of the User
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
