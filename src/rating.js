/**
 * @api {get} /rating/:id Request Rating information
 * @apiName GetRating
 * @apiGroup Rating
 *
 * @apiParam {Number} id Rating's unique ID
 *
 * @apiSuccess {Number} value Rating value
 * @apiSuccess {String} review Review for the product
 * @apiSuccess {Number} createdAt Product time of creation (UNIX)
 * @apiSuccess {Number} updatedAt Product time of last update (UNIX)
 * @apiSuccess {Number} productId Product ID
 * @apiSuccess {Number} userId User ID
 * @apiSuccess {Number} id Rating unique ID
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
 /**
  * @api {Post} /ratings/ Create a new Rating
  * @apiName CreateRating
  * @apiGroup Rating
  *
  * @apiParam {Number} value Rating value
  * @apiParam {String} review Review for the product
  * @apiParam {Number} createdAt Product time of creation (UNIX)
  * @apiParam {Number} updatedAt Product time of last update (UNIX)
  * @apiParam {Number} productId Product ID
  * @apiParam {Number} userId User ID
  *
  * @apiSuccess {Number} id ID of the Rating
  *
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
  *       "error": "InvalidRatingValue"
  *     }
  */
  /**
   * @api {Post} /rating/:id Update an existing Rating
   * @apiName UpdateRating
   * @apiGroup Rating
   *
   * @apiParam {Number} value Rating value
   * @apiParam {String} review Review for the product
   * @apiParam {Number} updatedAt Product time of last update (UNIX)
   * @apiParam {Number} productId Product ID
   * @apiParam {Number} userId User ID
   *
   * @apiSuccess {Number} id ID of the Rating
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "error": "InvalidRatingValue"
   *     }
   */
