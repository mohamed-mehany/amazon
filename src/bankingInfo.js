/**
 * @api {get} /bankingInfo/:userId Request Banking information of a User
 * @apiName GetBankingInfo
 * @apiGroup BankingInfo
 *
 * @apiParam {Number} id User's unique ID
 *
 * @apiSuccess {String} cardNumber Card Number
 * @apiSuccess {String} cardHolder Name of the User that owns the card
 * @apiSuccess {String} provider The Provider of the card
 * @apiSuccess {Number} type Type of the card
 * @apiSuccess {Number} createdAt BankingInfo time of creation (UNIX)
 * @apiSuccess {Number} updatedAt BankingInfo time of creation (UNIX)
 * @apiSuccess {Number} userId ID of the User that owns the card
 * @apiSuccess {Number} id ID of the Banking Info
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DepartmentNotFound"
 *     }
 */
 /**
  * @api {Post} /bankingInfo/ Create a new Banking for a User
  * @apiName CreateUserBankingInfo
  * @apiGroup BankingInfo
  *
  *
  * @apiParam {String} cardNumber Card Number
  * @apiParam {String} cardHolder Name of the User that owns the card
  * @apiParam {String} provider The Provider of the card
  * @apiParam {Number} type Type of the card
  * @apiParam {String} name Name of the Department
  * @apiParam {String} description Description of the Department
  * @apiParam {Number} userId User unique ID
  *
  * @apiSuccess {Number} id ID of the BankingInfo
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       "error": "InvalidDepartmentName"
  *     }
  */
  /**
   * @api {Put} /bankingInfo/:id Create a new Banking for a User
   * @apiName CreateUserBankingInfo
   * @apiGroup BankingInfo
   *
   * @apiParam {Number} id Banking Info unique ID
   *
   * @apiParam {String} cardNumber Card Number
   * @apiParam {String} cardHolder Name of the User that owns the card
   * @apiParam {String} provider The Provider of the card
   * @apiParam {Number} type Type of the card
   * @apiParam {String} name Name of the Department
   * @apiParam {String} description Description of the Department
   *
   * @apiSuccess {Number} id ID of the BankingInfo
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "error": "InvalidDepartmentName"
   *     }
   */
