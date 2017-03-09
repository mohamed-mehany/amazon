/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} name Firstname of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {Number} createdAt Product time of creation (UNIX)
 * @apiSuccess {String} address User time of creation (UNIX)
 * @apiSuccess {Object[]}  items Array of different types of the same product
 * @apiSuccess {Number} items.size Item's Size
 * @apiSuccess {String} items.color Item's color
 * @apiSuccess {Double} items.price Item's Price
 * @apiSuccess {Number} items.createdAt Item time of creation (UNIX)
 */
