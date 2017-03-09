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

/**
 * @api {get} /user/ Request Current User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiHeader {String} authorization Authorization token.
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
 * @apiSuccess {Object[]} bankingInfo Array of the user's banking info
 * @apiSuccess {String} bankingInfo.cardNumber Card Number
 * @apiSuccess {String} bankingInfo.cardHolder Name of the User that owns the card
 * @apiSuccess {String} bankingInfo.provider The Provider of the card
 * @apiSuccess {Number} bankingInfo.type Type of the card
 * @apiSuccess {Number} bankingInfo.createdAt BankingInfo time of creation (UNIX)
 * @apiSuccess {Number} bankingInfo.updatedAt BankingInfo time of creation (UNIX)
 * @apiSuccess {Number} bankingInfo.id ID of the Banking Info
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
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


 /**
  * @api {Put} /user/:id Update an existing User
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
