/**
 * @api {get} /message/:id Request Message information
 * @apiName GetMessage
 * @apiGroup Message
 *
 * @apiParam {Number} id Message's unique ID
 *
 * @apiSuccess {String} text The Message content
 * @apiSuccess {Number} state The State of the Message
 * @apiSuccess {Number} senderID ID of the Sender User
 * @apiSuccess {Number} recieverID ID of the Reciever User
 * @apiSuccess {Number} createdAt Vendor time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Vendor time of last update (UNIX)
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "MessageNotFound"
 *     }
 */
