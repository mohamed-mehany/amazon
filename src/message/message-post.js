/**
 * @api {Post} /messages/ Create a new Message
 * @apiName CreateMessage
 * @apiGroup Message
 *
 * @apiParam {String} text The Message content
 * @apiParam {Number} state The State of the Message
 * @apiParam {Number} senderID ID of the Sender User
 * @apiParam {Number} recieverID ID of the Reciever User
 *
 * @apiSuccess {Number} id ID of the Message
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidMessageContent"
 *     }
 */
