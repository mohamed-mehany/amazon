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
