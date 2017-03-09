/**
 * @api {put} /message/:id Update an existing Message
 * @apiName UpdateMessage
 * @apiGroup Message
 *
 * @apiParam {Number} id ID of the Message
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
