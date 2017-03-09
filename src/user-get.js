/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID
 *
 * @apiSuccess {String} name Firstname of the User
 * @apiSuccess {String} email Email of the User
 * @apiSuccess {String} address Address of the User
 * @apiSuccess {Number} dateOfBirth User date of birth (UNIX)
 * @apiSuccess {Number} gender Gender of the user
 * @apiSuccess {Number} createdAt User time of creation (UNIX)
 * @apiSuccess {Number} updatedAt User time of last update (UNIX)
 * @apiSuccess {String} token User authentication token
 * @apiSuccess {Number} id ID of the User
 * @apiSuccess {Object[]} items Array of items owned by the user
 * @apiSuccess {Number} items.id Item ID
 * @apiSuccess {String} items.productId Item Product ID
 * @apiSuccess {Number} items.createdAt Item time of buying (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
 
