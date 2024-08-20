/**
 * @openapi
 * /apidatas/{item_valueid}:
 *   get:
 *     summary: Retrieves user details by ID
 *     parameters:
 *       - in: path
 *         name: item_valueid
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idusers:
 *                     type: integer
 *                     description: User ID
 *                   name:
 *                     type: string
 *                     description: User's name
 *                   email:
 *                     type: string
 *                     description: User's email (encrypted)
 *                   role:
 *                     type: string
 *                     description: User's role
 *       500:
 *         description: Server error
 */