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
