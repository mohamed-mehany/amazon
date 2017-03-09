/**
 * @api {get} /messages/:recieverId Request All Messages Between the current user and another reciever
 * @apiName GetMessages
 * @apiGroup Message
 *
 * @apiParam {Number} recieverId Reciever's unique ID
 *
 * @apiSuccess {Object[]} messages Array of messages
 * @apiSuccess {String} messages.text The Message content
 * @apiSuccess {Number} messages.state The State of the Message
 * @apiSuccess {Number} messages.senderID ID of the Sender User
 * @apiSuccess {Number} messages.recieverID ID of the Reciever User
 * @apiSuccess {Number} messages.createdAt Message time of creation (UNIX)
 * @apiSuccess {Number} messages.updatedAt Message time of last update (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "MessageNotFound"
 *     }
 */
