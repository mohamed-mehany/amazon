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