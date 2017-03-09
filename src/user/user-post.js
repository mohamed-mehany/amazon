/**
 * @api {Post} /users/ Create a new User
 * @apiName CreateUser
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
/**
 * @api {Post} /login/ Login with an existing User
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String} email Email of the User
 * @apiParam {String} password Password of the User
 *
 * @apiSuccess {String} token User authentication token
 * @apiSuccess {Number} id ID of the User
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InCorrectPassword"
 *     }
 */
 /**
  * @api {Post} /user/bankingInfo/ Create a new Banking for the current User
  * @apiName CreateUserBankingInfo
  * @apiGroup BankingInfo
  *
  * @apiHeader {String} authorization Authorization token.
  *
  * @apiParam {Number} req.userId Current user ID
  * @apiParam {String} cardNumber Card Number
  * @apiParam {String} cardHolder Name of the User that owns the card
  * @apiParam {String} provider The Provider of the card
  * @apiParam {Number} type Type of the card
  * @apiParam {String} name Name of the Department
  * @apiParam {String} description Description of the Department
  * @apiSuccess {Number} id ID of the BankingInfo
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       "error": "InvalidDepartmentName"
  *     }
  */
  /**
   * @api {Post} /user/items/ Create a new Item for the current User
   * @apiName CreateUserItem
   * @apiGroup User
   *
   * @apiHeader {String} authorization Authorization token.
   *
   * @apiParam {Number} req.userId Current user ID
   * @apiSuccess {Number} itemId Item ID
   * @apiSuccess {String} productId Item Product ID
   * @apiSuccess {Number} createdAt Item time of buying (UNIX)
   *
   * @apiSuccess {Number} id ID of the UserItem
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "error": "ItemNotFound"
   *     }
   */
